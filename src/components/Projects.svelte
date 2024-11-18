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
            technologies: [
                {
                    bgcolor: "#742099",
                    color: "white",
                    text: "C#",
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
            technologies: [
                {
                    bgcolor: "#e8df35",
                    color: "black",
                    text: "JS",
                },
                {
                    bgcolor: "#74bc2d",
                    color: "black",
                    text: "Node",
                },
                {
                    bgcolor: "#fc8c37",
                    color: "black",
                    text: "Svelte",
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
            technologies: [
                {
                    bgcolor: "#742099",
                    color: "white",
                    text: "C#",
                },
                {
                    bgcolor: "#e73c00",
                    color: "white",
                    text: "MonoGame",
                },
            ],
        },
        {
            name: "steam achievement dashboard",
            description:
                "A simplistic dashboard for manage completing steam achievements. ",
            img: ["sad0.png", "sad1.png", "sad2.png"],
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
            technologies: [
                {
                    bgcolor: "#7f71ce",
                    color: "black",
                    text: "php",
                },
                {
                    bgcolor: "#e8df35",
                    color: "black",
                    text: "JS",
                },
                {
                    bgcolor: "#c62b2b",
                    color: "black",
                    text: "Laravel",
                },
                {
                    bgcolor: "#fc8c37",
                    color: "black",
                    text: "Svelte",
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
