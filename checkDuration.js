const formatDuration = (sec) => {
        const minutes = Math.floor(sec / 60);
        const seconds = Math.round(sec % 60);
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2,'0')}`
    }
console.log(formatDuration(59.8))