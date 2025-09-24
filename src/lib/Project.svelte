<!-- src/lib/ProjectCard.svelte -->
<script lang="ts">
  import type { Component, Icon, IconProps } from "@lucide/svelte";
  import ExternalLink from "@lucide/svelte/icons/external-link";

  const {
    headerGradient = "from-gray-500 to-gray-700",
    description = "",
    title = "",
    links = [],
    techTags = [],
  } = $props();
</script>

<div class="p-4">
  <div class="rounded-xl shadow-lg overflow-hidden bg-white dark:bg-gray-800">
    <div class={"bg-gradient-to-r " + headerGradient + " p-4"}>
      <h3 class="text-xl font-semibold text-white">Project: {title}</h3>
    </div>

    <div class="p-4 space-y-3">
      <p class="text-gray-700 dark:text-gray-300">{description}</p>

      {#if techTags.length}
        <div class="flex flex-wrap gap-2">
          {#each techTags as tag}
            <span
              class={"px-2 py-0.5 rounded text-xs font-medium " +
                (tag.color ?? "bg-indigo-100 text-indigo-800")}>
              {tag.name}
            </span>
          {/each}
        </div>
      {/if}

      {#if links.length}
        <div class="flex space-x-4 pt-2">
          {#each links as { href, label, Icon }}
            <a
              {href}
              target="_blank"
              rel="noopener noreferrer"
              class="group flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label={label}
              title={label}>
              <Icon class="w-5 h-5" />
            </a>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
  :global(.dark) .bg-gradient-to-r {
    opacity: 0.9;
  }
</style>
