// Code from Apple dev docs
// https://developer.apple.com/documentation/webkitjs/adding_an_airplay_button_to_your_safari_media_controls


if (window.WebKitPlaybackTargetAvailabilityEvent) {
    player.addEventListener('webkitplaybacktargetavailabilitychanged',
        function (event) {
            switch (event.availability) {
                case "available":
                    airPlayButton.hidden = false;
                    airPlayButton.disabled = false;
                    break;
                case "not-available":
                    airPlayButton.hidden = true;
                    airPlayButton.disabled = true;
                    break;
            }
        });
}