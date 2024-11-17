<script>
    import Project from "./Project.svelte";
    let projects = [
        {
            name: "sadet",
            description:
                "A cli tool to do some simple data analysis on steam achievement or rather extract that data from steam.",
            img: ["sadet_example.png"],
            links: [
                {
                    text: "Github",
                    href: "https://github.com/Joyersch/sadet",
                },
                {
                    text: "Docs",
                    href: " https://docs.joyersch.de/books/sadet-CYv",
                },
            ],
        },
        {
            name: "This website",
            description:
                "I would say this counts. Even though it is my first time experience with svelte.",
            img: [],
            links: [
                {
                    text: "Github",
                    href: "https://github.com/Joyersch/website",
                },
            ],
        },
        {
            name: "NoNameButtonGame",
            description:
                "A level based game around pressing a button or rather not being able to...",
            img: ["nnbg_screeenshot.png"],
            links: [
                {
                    text: "Github",
                    href: "https://github.com/Joyersch/NoNameButtonGame",
                },
                {
                    text: "Itch.io",
                    href: "https://joyersch.itch.io/nonamebuttongame",
                },
            ],
        },
        {
            name: "steam achievement dashboard",
            description:
                "A simplistic dashboard for manage completing steam achievements. ",
            img: [
                "steam-achievement-dashboard_example.png",
                "steam-achievement-dashboard_example2.png",
            ],
            links: [
                {
                    text: "Github",
                    href: "https://github.com/Joyersch/steam-achievement-dashboard",
                },
                {
                    text: "Live",
                    href: "https://sad.joyersch.de/stats/Joy",
                },
            ],
        },
    ];
</script>

<div class="ml-3 mr-3">
    {#each projects as project, i}
        <Project {project} />
        {#if i !== projects.length - 1}
            <div class="flex justify-center">
                <div class="w-11/12">
                    <hr class="border-t-4 border-neya_eyes_darkened my-4" />
                </div>
            </div>
        {/if}
    {/each}
</div>
