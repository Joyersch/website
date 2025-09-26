<script>
  import getAge from "./getAge";

  const name = "Joy";
  const pronouns = "she/her";
  const birthDate = "2001-08-30";
  const devSince = "2023-08-09";

  import Github from "@lucide/svelte/icons/github";
  import Gamepad2 from "@lucide/svelte/icons/gamepad-2";
  import Linkedin from "@lucide/svelte/icons/linkedin";
  import { Tooltip } from "@skeletonlabs/skeleton-svelte";

  const socials = [
    {
      href: "https://github.com/Joyersch",
      label: "GitHub",
      Icon: Github,
      tooltip: "Github",
    },
    {
      href: "https://joyersch.itch.io/",
      label: "itch.io",
      Icon: Gamepad2,
      tooltip: "Itch.io",
    },
    {
      href: "https://www.linkedin.com/in/joy-7ejnma/",
      label: "LinkedIn",
      Icon: Linkedin,
      tooltip: "LinkedIn",
    },
  ];
</script>

<div class="p-4">
  <div
    class="custom-card bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
    <div class="bg-gradient-to-r to-purple-500 p-6 text-white from-pink-300">
      <h5 class="text-2xl font-semibold">About me</h5>
    </div>

    <div class="p-6 flex flex-col space-y-5">
      <div class="flex items-center space-x-3">
        <div
          class="w-12 h-12 rounded-full bg-purple-900 dark:bg-pink-200 flex items-center justify-center text-purple-600 dark:text-pink-400 font-bold text-lg">
          {name.charAt(0)}
        </div>

        <div>
          <p class="text-lg font-medium text-gray-900 dark:text-gray-100 pr-5">
            {name}
          </p>
          <p class="text-sm text-gray-600 dark:text-gray-400">{pronouns}</p>
        </div>
      </div>

      <div class="flex flex-wrap gap-3">
        <span
          class="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-400 text-sm font-medium">
          {getAge(birthDate)} y/o
        </span>

        <span
          class="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium">
          Software developer for {getAge(devSince)} years
        </span>
      </div>

      <div class="flex space-x-4 pt-2">
        {#each socials as { href, label, Icon, tooltip }}
          <a
            {href}
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            aria-label={label}
            title={tooltip}>
            <Icon class="w-5 h-5" />
            <span class="sr-only">{label}</span>
          </a>
        {/each}
      </div>
    </div>
  </div>
</div>
