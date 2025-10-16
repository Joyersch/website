<!-- src/lib/ProjectCard.svelte -->
<script lang="ts">
  const { title = "", links = [], techTags = [] } = $props();
</script>

<div
  class="flex flex-col items-start styled colored styled-card2 styled-border2"
>
  <span class="styled"><strong>project:</strong> {title}</span>
  <div class="flex flex-row gap-1">
    <span><strong>uses:</strong></span>
    {#each techTags as tag}
      <span class="">
        {tag.name}
      </span>
    {/each}
  </div>
  <div class="flex flex-row gap-2">
    <span class=""><strong>links:</strong></span>
    {#each links as { href, label }}
      <a
        {href}
        target="_blank"
        rel="noopener noreferrer"
        class="styled colored-text"
        aria-label={label}
        title={label}
      >
        <span>{label}</span>
      </a>
    {/each}
  </div>
</div>
