<script lang="ts">
  import type { Snippet } from "svelte";
  import { C } from "$lib/data/colors";

  let { children, c = C.red }: { children: Snippet; c?: string } = $props();
</script>

<div class="label" style="color: {c};">
  {@render children()}
</div>

<style>
  .label {
    font-size: 9px;
    letter-spacing: 5px;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 20px;
  }

  @media (max-width: 767px) {
    .label {
      padding-top: 28px;
    }
  }
</style>
