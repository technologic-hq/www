<script lang="ts">
  import { getSupabase } from "$lib/supabase";

  let { visible = false }: { visible?: boolean } = $props();

  let email = $state("");
  let status = $state<"idle" | "submitting" | "success" | "error">("idle");
  let dismissed = $state(false);

  async function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    if (!email || status === "submitting") return;

    const supabase = getSupabase();
    if (!supabase) {
      status = "error";
      return;
    }

    status = "submitting";
    try {
      const { error } = await supabase.from("emails").insert({ email });
      if (error) {
        // 23505 = unique violation — treat as success
        if (error.code === "23505") {
          status = "success";
        } else {
          status = "error";
        }
      } else {
        status = "success";
      }
    } catch {
      status = "error";
    }
  }
</script>

<div class="email-bar" class:show={visible && !dismissed}>
  {#if status === "success"}
    <div class="success-msg">Thanks! We'll be in touch.</div>
  {:else}
    <form class="form" onsubmit={handleSubmit}>
      <input
        class="email-input"
        type="email"
        placeholder="your@email.com"
        required
        bind:value={email}
        disabled={status === "submitting"}
      />
      <button
        class="submit-btn"
        type="submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending..." : "Stay in the loop"}
      </button>
    </form>
    {#if status === "error"}
      <div class="error-msg">Something went wrong. Try again.</div>
    {/if}
  {/if}
  <button
    class="dismiss"
    onclick={() => (dismissed = true)}
    aria-label="Dismiss"
  >
    &times;
  </button>
</div>

<style>
  .email-bar {
    position: fixed;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%) translateY(calc(100% + 16px));
    z-index: 100;
    background: oklch(21.78% 0 0);
    padding: 14px 20px;
    padding-right: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    border-radius: 10px;
    box-shadow: 0 8px 32px oklch(0% 0 0 / 0.4);
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    width: auto;
  }

  .email-bar.show {
    transform: translateX(-50%) translateY(0);
  }

  .form {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .email-input {
    width: 240px;
    padding: 8px 14px;
    border: 1px solid oklch(100% 0 0 / 0.15);
    border-radius: 4px;
    background: oklch(100% 0 0 / 0.06);
    color: oklch(95.68% 0.012 79.78);
    font-size: 13px;
    font-family: "Roboto Flex", sans-serif;
    outline: none;
    transition: border-color 0.2s;
  }

  .email-input::placeholder {
    color: oklch(100% 0 0 / 0.3);
  }

  .email-input:focus {
    border-color: oklch(56.24% 0.1776 30.68);
  }

  .email-input:disabled {
    opacity: 0.5;
  }

  .submit-btn {
    padding: 8px 18px;
    background: oklch(56.24% 0.1776 30.68);
    color: oklch(95.68% 0.012 79.78);
    border: none;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 700;
    font-family: "Roboto Flex", sans-serif;
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: opacity 0.2s;
    white-space: nowrap;
  }

  .submit-btn:hover {
    opacity: 0.9;
  }

  .submit-btn:disabled {
    opacity: 0.5;
    cursor: default;
  }

  .success-msg {
    font-size: 13px;
    color: oklch(95.68% 0.012 79.78);
    font-family: "Roboto Flex", sans-serif;
  }

  .error-msg {
    font-size: 11px;
    color: oklch(56.24% 0.1776 30.68);
    font-family: "Roboto Flex", sans-serif;
  }

  .dismiss {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: oklch(100% 0 0 / 0.35);
    font-size: 18px;
    cursor: pointer;
    padding: 4px 6px;
    line-height: 1;
  }

  .dismiss:hover {
    color: oklch(100% 0 0 / 0.7);
  }

  @media (max-width: 767px) {
    .email-bar {
      bottom: 12px;
      left: 12px;
      right: 12px;
      transform: translateX(0) translateY(calc(100% + 12px));
      width: auto;
      padding: 14px 16px;
      padding-right: 36px;
    }

    .email-bar.show {
      transform: translateX(0) translateY(0);
    }

    .form {
      flex-direction: column;
      width: 100%;
    }

    .email-input {
      width: 100%;
      box-sizing: border-box;
    }

    .submit-btn {
      width: 100%;
    }
  }
</style>
