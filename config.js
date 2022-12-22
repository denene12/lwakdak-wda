module.exports = {
        px: '.',
        playing: 'made in furk4n',
        messageColor:'#FF6347',

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ', //DJ rolünüzün ismi. ~AOPRAX
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume']  // ~AOPRAX
        },
        maxVol: 250,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
