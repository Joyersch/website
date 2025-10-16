<script>
    import { getMonths, getYears } from "./AgeCalculation";

    const socials = [
        {
            href: "https://github.com/Joyersch",
            label: "github",
            tooltip: "Github",
        },
        {
            href: "https://joyersch.itch.io/",
            label: "itch.io",
            tooltip: "Itch.io",
        },
        {
            href: "https://www.linkedin.com/in/joy-7ejnma/",
            label: "linkedin",
            tooltip: "LinkedIn",
        },
    ];

    const name = "joy";
    const pronouns = "she/her";
    const birthDate = "2001-08-30";
    const devSince = "2023-08-09";
</script>

<div>
    <div class="flex flex-col items-start">
        <span class="styled"> <strong>name:</strong> {name}</span>

        <span class="styled">
            <strong>age:</strong>
            {getYears(birthDate)} y/o
        </span>

        <span class="styled">
            <strong>developer for:</strong>
            {getYears(devSince)} years {getMonths(devSince)} months
        </span>
    </div>

    <div class="flex gap-2">
        <span class="styled"><strong>links: </strong></span>
        {#each socials as { href, label, tooltip }}
            <a
                {href}
                target="_blank"
                rel="noopener noreferrer"
                class="styled colored-text"
                aria-label={label}
                title={tooltip}
            >
                <span>{label}</span>
            </a>
        {/each}
    </div>
</div>
