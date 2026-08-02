<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mohamad Afizi's Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js"></script>
    <link rel="icon" type="image/png" href="assets/images/dp.png">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css">
    <link rel="stylesheet" href="assets/css/style.css?v=2">
</head>

<body class="bg-black text-gray-200 min-h-screen font-sans">
    <div id="vanta-bg"></div>
    <div class="flex min-h-screen main-content-z">
        <!-- Sidebar (Navigation) -->
        <aside class="w-80 flex flex-col items-center justify-start pt-12 pb-8 fixed top-0 left-0 h-full z-20">
            <!-- Profile Header in Sidebar -->
            <div class="w-40 h-40 rounded-full mb-4 overflow-hidden">
                <img src="assets/images/dp.png" alt="Profile" class="w-full h-full object-cover">
            </div>
            <h1 class="text-lg font-bold mb-2">Mohamad Afizi</h1>
            <p class="text-gray-400 text-center text-xs mb-6">Application Developer & Systems Analyst<br><i class="fas fa-map-pin mr-1"></i>Kuala Lumpur, Malaysia</p>
            <!-- Vertical Navigation -->
            <nav class="flex flex-col space-y-2 w-full items-center">
                <button onclick="showTab('profile', event)" class="tab-btn active-tab px-2 py-2 w-32 font-medium hover:text-white transition text-center">
                    <i class="fas fa-user mr-2"></i>Profile
                </button>
                <button onclick="showTab('projects', event)" class="tab-btn px-2 py-2 w-32 font-medium hover:text-white transition text-center">
                    <i class="fas fa-code mr-2"></i>Projects
                </button>
                <button onclick="showTab('milestone', event)" class="tab-btn px-2 py-2 w-32 font-medium hover:text-white transition text-center">
                    <i class="fas fa-history mr-2"></i>Milestones
                </button>
                <button onclick="showTab('industry', event)" class="tab-btn px-2 py-2 w-32 font-medium hover:text-white transition text-center">
                    <i class="fas fa-briefcase mr-2"></i>Industry Experiences
                </button>
            </nav>
        </aside>
