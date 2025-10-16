<script lang="ts">
  import Github from "@lucide/svelte/icons/github";
  import Project from "./Project.svelte";
  import { Book, ExternalLink, Gamepad2 } from "@lucide/svelte";

  const projects = [
    {
      title: "nonamebuttongame",
      techTags: [{ name: "monogame" }, { name: "c#" }, { name: "dotnet" }],
      links: [
        {
          href: "https://github.com/Joyersch/NoNameButtonGame",
          label: "github",
        },
        {
          href: "https://joyersch.itch.io/",
          label: "itch.io",
        },
      ],
    },
    {
      title: "sadet",
      techTags: [{ name: "c#" }, { name: "dotnet" }],
      links: [
        {
          href: "https://github.com/Joyersch/sadet",
          label: "github",
        },
        {
          href: "https://docs.joyersch.de/books/sadet-CYv",
          label: "itch.io",
        },
      ],
    },
    {
      title: "sad",
      techTags: [
        { name: "php" },
        { name: "laravel" },
        { name: "js" },
        { name: "svelte" },
      ],
      links: [
        {
          href: "https://github.com/Joyersch/steam-achievement-dashboard",
          label: "github",
        },
        {
          href: "https://sad.joyersch.de/",
          label: "live",
        },
      ],
    },
  ];
</script>

<div class="flex flex-row pt-1 gap-2 flex-wrap">
  {#each projects as project}
    <Project
      title={project.title}
      techTags={project.techTags}
      links={project.links}
    />
  {/each}
</div>
