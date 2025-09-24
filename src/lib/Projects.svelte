<script lang="ts">
  import Github from "@lucide/svelte/icons/github";
  import Project from "./Project.svelte";
  import { Book, ExternalLink, Gamepad2 } from "@lucide/svelte";

  const projects = [
    {
      title: "NoNameButtonGame",
      description:
        "A game about pressing a button. Or rather not beeing able to...",
      headerGradient: "from-red-400 to-gray-500",
      techTags: [
        { name: "Monogame", color: "bg-orange-100 text-orange-800" },
        { name: "C#", color: "bg-sky-500 text-sky-800" },
        { name: "Dotnet", color: "bg-violet-600 text-violet-900" },
      ],
      links: [
        {
          href: "https://github.com/Joyersch/NoNameButtonGame",
          label: "GitHub",
          Icon: Github,
        },
        {
          href: "https://lumo-chatbot.demo.proton.me",
          label: "Itch.IO",
          Icon: Gamepad2,
        },
      ],
    },
    {
      title: "sadet",
      description:
        "CLI tool to extract achievement data from steam and do some data analysis",
      headerGradient: "from-purple-300 to-blue-500",
      techTags: [
        { name: "C#", color: "bg-sky-500 text-sky-800" },
        { name: "Dotnet", color: "bg-violet-600 text-violet-900" },
      ],
      links: [
        {
          href: "https://github.com/Joyersch/sadet",
          label: "GitHub",
          Icon: Github,
        },
        {
          href: "https://docs.joyersch.de/books/sadet-CYv",
          label: "Docs",
          Icon: Book,
        },
      ],
    },
    {
      title: "Sad (Steam achievement Dashboard)",
      description: "Webtool which will track your achievemnt states for you",
      headerGradient: "from-green-500 to-blue-500",
      techTags: [
        { name: "php", color: "bg-purple-200 text-purple-800" },
        { name: "laravel", color: "bg-red-600 text-red-950" },
        { name: "js", color: "bg-yellow-400 text-yellow-900" },
        { name: "svelte", color: "bg-orange-500 text-orange-900" },
      ],
      links: [
        {
          href: "https://github.com/Joyersch/steam-achievement-dashboard",
          label: "GitHub",
          Icon: Github,
        },
        {
          href: "https://sad.joyersch.de/",
          label: "Live",
          Icon: ExternalLink,
        },
      ],
    },
  ];
</script>

{#each projects as project}
  <Project
    title={project.title}
    description={project.description}
    headerGradient={project.headerGradient}
    techTags={project.techTags}
    links={project.links} />
{/each}
