<div id="projects" class="tab-content hidden max-w-4xl mx-auto px-4">
    A collection of systems, tools, and explorations built across professional work, independent development, and deliberate learning. Each project represents a specific problem solved or a skill deliberately developed
    <br><br>

    <!-- Inner Tabs -->
    <div class="flex space-x-2 mb-4 border-b border-gray-800">
        <button class="inner-tab-btn active-inner-tab text-xl font-bold px-2 pb-1 bg-transparent text-white" onclick="showProjectTab('independentProjects', event)">Independent Projects</button>
        <button class="inner-tab-btn text-xl font-bold px-2 pb-1 bg-transparent text-white" onclick="showProjectTab('learningProjects', event)">Learning Projects</button>
        <button class="inner-tab-btn text-xl font-bold px-2 pb-1 bg-transparent text-white" onclick="showProjectTab('academicProjects', event)">Academic Projects</button>
    </div>

    <!-- Independent Projects Cards -->
    <div id="independentProjects" class="project-inner-tab tab-container">
        <?php include 'tabs/independent_projects.php'; ?>
    </div>

    <!-- Learning Projects Cards -->
    <div id="learningProjects" class="project-inner-tab hidden tab-container">
        <?php include 'tabs/learning_projects.php'; ?>
    </div>

    <!-- Academic Projects -->
    <div id="academicProjects" class="project-inner-tab hidden tab-container">
        <?php include 'tabs/academic_projects.php'; ?>
    </div>
</div>
