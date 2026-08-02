<!-- Fixed Footer -->
    <div class="fixed bottom-0 left-0 right-0 z-20">
        <footer class="py-1 text-center text-gray-500 text-[9px]">
            <span>Build by Mohamad Afizi. Self-hosted. Self-made. 2026</span>
        </footer>
    </div>

    <!-- Modal Structure -->
    <div id="readMoreModal" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 hidden transition-opacity duration-300">
        <div class="bg-[#111] rounded-lg shadow-xl w-full max-w-2xl p-6 relative border border-gray-700" style="box-shadow: 0 0 30px rgba(109, 239, 248, 0.3);">
            <button id="closeModalBtn" class="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl">&times;</button>
            <h2 id="modalTitle" class="text-2xl font-bold mb-4 text-[#6defF8]"></h2>
            <div id="modalContent" class="text-gray-300 leading-relaxed max-h-[60vh] overflow-y-auto pr-4">
                <!-- Content will be injected here -->
            </div>
        </div>
    </div>

    <script src="assets/js/app.js?v=2"></script>
</body>
</html>
