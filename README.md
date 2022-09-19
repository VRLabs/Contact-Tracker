# Contact Tracker
  
[![Generic badge](https://img.shields.io/badge/Unity-2019.4.31f1-informational.svg)](https://unity3d.com/unity/whats-new/2019.4.31)
[![Generic badge](https://img.shields.io/badge/SDK-AvatarSDK3-informational.svg)](https://vrchat.com/home/download)
[![Generic badge](https://img.shields.io/badge/License-MIT-informational.svg)](https://github.com/VRLabs/Contact-Tracker/blob/main/LICENSE)
[![Generic badge](https://img.shields.io/github/downloads/VRLabs/Contact-Tracker/total?label=Downloads)](https://github.com/VRLabs/Contact-Tracker/releases/latest)

Tracking for contacts, by contacts.

## How it works

Proximity-type [Receivers](https://docs.vrchat.com/docs/contacts#VRCContactReceiver) overlap on each axis and feed values to a parented position constraint, which centers on a tagged [Sender](https://docs.vrchat.com/docs/contacts#VRCContactSender).

## Install guide

https://user-images.githubusercontent.com/45078979/165898002-cadaceb8-213c-431f-885b-03e5c7b9ba48.mp4

**Use the latest version of [Avatars 3.0 Manager](https://github.com/VRLabs/Avatars-3.0-Manager).**

Merge the FX controller to your own FX controller, using the [Avatars 3.0 Manager](https://github.com/VRLabs/Avatars-3.0-Manager) tool.

"Contact Tracker.prefab" should go to the base of your Unity scene, which will give it base Unity scaling.

Unpack the prefab by right-clicking it.

Place "Contact Tracker" at the base of your avatar.

Remove "Tracker Target" outside of "Contact Tracker" and place it anywhere in your avatar's hierarchy as needed.

## How to use

**"ContactTracker/Control" parameter must be true for the system to be active.**

Place objects inside "Contact Tracker/Container" for attaching to the tracked contact. Alternatively, constrain objects to "Contact Tracker/Tracking Points".

You can edit the collision tags on the 6 receiver components in the "Contact Tracker/Tracking Points" hierarchy to change what contact senders can be tracked.

"ContactTracker/Size" parameter can be changed to scale the size of the tracker while it is not tracking.

## Examples

[Red's Player Tracker](https://github.com/hfcRed/Player-Tracker) implements this tracking method in a ready-to-go framework.

## Credit

[Red](https://github.com/hfcRed)

[Dreadrith](https://github.com/Dreadrith)

## Author Note

The Blend Tree used in the "Tracker Blend Tree" layer must use Write Defaults ON. This may result in you mixing Write Defaults settings. In this case, specifically with that Blend Tree, mixing Write Defaults settings **should be okay**. If mixing Write Defaults settings with that layer causes an issue for you, [please report it to us](https://discord.vrlabs.dev).

## Downloads

You can grab the latest version of the Contact Tracker in [Releases](https://github.com/VRLabs/Contact-Tracker/releases/latest).

## License

Contact Tracker is available as-is under MIT. For more information see [LICENSE](https://github.com/VRLabs/Contact-Tracker/blob/main/LICENSE).

## Contact us

If you need help, our support channel is on [Discord](https://discord.vrlabs.dev).
