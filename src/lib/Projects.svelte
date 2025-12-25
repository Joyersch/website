<script lang="ts">
  const projects = [
    {
      link: "https://github.com/Joyersch/NoNameButtonGame",
      label: "NoNameButtonGame",
    },
    {
      link: "https://github.com/Joyersch/sadet",
      label: "sadet",
    },
    {
      link: "https://github.com/Joyersch/steam-achievement-dashboard",
      label: "sad",
    },
  ];
</script>

<ol class="list project-index">
  {#each projects as { label, link }}
    <li>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        class="styled link"
        aria-label={label}
        title={label}
      >
        <span>{label}</span>
      </a>
    </li>
  {/each}
</ol>
