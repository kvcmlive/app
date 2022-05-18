initializeCastApi = function () {
    cast.framework.CastContext.getInstance().setOptions({
        receiverApplicationId: chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID,
    });
    var context = cast.framework.CastContext.getInstance();
    context.addEventListener(
        cast.framework.CastContextEventType.SESSION_STATE_CHANGED,
        function (event) {
            switch (event.sessionState) {
                case cast.framework.SessionState.SESSION_STARTED:
                    console.log("session started")
                    var castSession = cast.framework.CastContext.getInstance().getCurrentSession();
                    var mediaInfo = new chrome.cast.media.MediaInfo("https://stream.kvcm.live/stream", "audio/mp3");
                    var request = new chrome.cast.media.LoadRequest(mediaInfo);
                    castSession.loadMedia(request).then(
                        function () { console.log('Load succeed'); },
                        function (errorCode) { console.log('Error code: ' + errorCode); });
                    console.log("Attempted media load")
                case cast.framework.SessionState.SESSION_RESUMED:
                    break;
                case cast.framework.SessionState.SESSION_ENDED:
                    console.log('CastContext: CastSession disconnected');
                    // Update locally as necessary
                    break;
            }
        })
    var player = new cast.framework.RemotePlayer();
    var playerController = new cast.framework.RemotePlayerController(player);

    playerController.addEventListener(
        cast.framework.RemotePlayerEventType.IS_CONNECTED_CHANGED, function () {
            if (!player.isConnected) {
                console.log('RemotePlayerController: Player disconnected');
                // Update local player to disconnected state
            }
        });


    console.log("Initialized cast library")
};



