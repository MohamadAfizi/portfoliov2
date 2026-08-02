<div id="milestone" class="tab-content hidden max-w-4xl mx-auto px-4">
    Certifications, completed training, and learning milestones — a running record of deliberate skill development alongside professional work. <br><br>
    <div class="flex space-x-2 mb-4 border-b border-gray-800">
        <button class="inner-tab-btn active-inner-tab text-xl font-bold px-2 pb-1 bg-transparent text-white" onclick="showMilestoneTab('learningPath', event)">Learning Path</button>
        <button class="inner-tab-btn text-xl font-bold px-2 pb-1 bg-transparent text-white" onclick="showMilestoneTab('professionalCertifications', event)">Skills-Validated Certification</button>
        <button class="inner-tab-btn text-xl font-bold px-2 pb-1 bg-transparent text-white" onclick="showMilestoneTab('learningCertifications', event)">Course Completion</button>
    </div>
    <div id="learningPath" class="milestone-inner-tab tab-container">
        <?php include 'tabs/learning_path.php'; ?>
    </div>
    <div id="professionalCertifications" class="milestone-inner-tab hidden tab-container">
        <?php include 'tabs/skills_certifications.php'; ?>
    </div>
    <div id="learningCertifications" class="milestone-inner-tab hidden tab-container">
        <?php include 'tabs/course_completion.php'; ?>
    </div>
</div>