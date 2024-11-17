<script>
    import Project from "./Project.svelte";
    let projects = [
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
        },
    ];
</script>

<div class="ml-3 mr-3">
    {#each projects as project}
        <div class="pb-5 pt-5">
            <Project {project} />
        </div>
    {/each}
</div>
