<script>
    import Project from "./Project.svelte";
    let projects = [
        {
            name: "Volksempfaenger",
            description:
                "Discord bot acting as a sound board. Can join a vc on command or on user join to play a fixed or random sound. Was depricated do to discord adding the soundboard feature.",
            img: [],
            links: [
                {
                    text: "Github",
                    href: "https://github.com/Joyersch/Volksempfaenger",
                },
            ],
            technologies: [
                {
                    bgcolor: "#742099",
                    color: "white",
                    text: "C#",
                },
                {
                    bgcolor: "#a13eb2",
                    color: "white",
                    text: "Discord.NET",
                },
            ],
        },
        {
            name: "sadet.autodb",
            description:
                "A collection of mutliple things. A script which automaticly pulls steam achievement data. An api for that data and a dashboard to display that data on a web. Has been depricated with the release of steam-achievement-dashboard",
            img: ["sadet.autodb_example.png"],
            links: [
                {
                    text: "Github",
                    href: "https://github.com/Joyersch/sadet.autodb",
                },
            ],
            technologies: [
                {
                    bgcolor: "#742099",
                    color: "white",
                    text: "C#",
                },
                {
                    bgcolor: "#2b45c6",
                    color: "white",
                    text: "Python",
                },
                {
                    bgcolor: "#2564b2",
                    color: "black",
                    text: "ASP.NET",
                },
                {
                    bgcolor: "#2891b7",
                    color: "black",
                    text: "postgresql",
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
