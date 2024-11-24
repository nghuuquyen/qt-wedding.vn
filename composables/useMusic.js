import { reactive } from "vue";

const musicState = reactive({
    isTemporarilyPaused: false,
    isPlaying: false,
    audio: null,
});

export function useMusic() {
    if (!musicState.audio) {
        musicState.audio = new Audio("/audios/mot-doi.mp3");
        musicState.audio.loop = true; // Set music to loop
    }

    const toggleMusic = () => {
        if (musicState.isPlaying) {
            musicState.audio.pause();
        } else {
            musicState.audio.play();
        }
        musicState.isPlaying = !musicState.isPlaying; // Update state reactively
        musicState.isTemporarilyPaused = false;
    };

    const temporarilyPauseMusic = () => {
        musicState.audio.pause();
        musicState.isTemporarilyPaused = true;
    };

    const resumeMusic = () => {
        if (musicState.isTemporarilyPaused) {
            musicState.audio.play();
            musicState.isTemporarilyPaused = false;
        }
    };

    return { musicState, toggleMusic, temporarilyPauseMusic, resumeMusic };
}
