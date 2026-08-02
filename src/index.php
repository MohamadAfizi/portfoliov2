<?php
include 'includes/header.php';
?>

<!-- Main Content -->
<main class="flex-1 flex flex-col px-8 pt-12 pb-24 ml-80" style="min-height: 100vh;">
    <!-- Top-right toggle -->
    <div class="flex justify-end mb-4">
        <label for="layoutToggle" class="flex items-center cursor-pointer text-sm">
            <span class="mr-2">Original</span>
            <div class="relative">
                <input id="layoutToggle" type="checkbox" class="sr-only" />
                <div class="block w-12 h-6 rounded-full bg-gray-600"></div>
                <div class="dot absolute left-1 top-1 w-4 h-4 rounded-full bg-white transition"></div>
            </div>
            <span class="ml-2">Fit to Screen</span>
        </label>
    </div>

    <!-- Wrapper that all tabs share -->
    <div id="contentWrapper" class="w-full max-w-4xl mx-auto px-4">
        <?php include 'sections/profile.php'; ?>
    </div>

    <?php include 'sections/projects.php'; ?>
    <?php include 'sections/milestones.php'; ?>
    <?php include 'sections/industry_experiences.php'; ?>
</main>

<?php
include 'includes/footer.php';
?>
