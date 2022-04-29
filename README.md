# Contact Tracker
  
[![Generic badge](https://img.shields.io/badge/Unity-2019.4.31f1-informational.svg)](https://unity3d.com/unity/whats-new/2019.4.31)
[![Generic badge](https://img.shields.io/badge/SDK-AvatarSDK3-informational.svg)](https://vrchat.com/home/download)
[![Generic badge](https://img.shields.io/badge/License-MIT-informational.svg)](https://github.com/VRLabs/Contact-Tracker/blob/main/LICENSE)
[![Generic badge](https://img.shields.io/github/downloads/VRLabs/Contact-Tracker/total?label=Downloads)](https://github.com/VRLabs/Contact-Tracker/releases/latest)

Tracking for contacts, by contacts.

## How it works

Proximity [receivers](https://docs.vrchat.com/docs/contacts) overlap on each axis and feed values to a parented position constraint, which centers the constraint on a tagged sender.

## Install guide

Merge the FX controller to your own FX controller, using the [Avatars 3.0 Manager](https://github.com/VRLabs/Avatars-3.0-Manager) tool.

"ContactTracker.Control" is a synced parameter, so click the checkbox within the tool to add it to your avatar's parameter asset. 

"Contact Tracker.prefab" should go to the base of your Unity scene, which will give it base Unity scaling.

Unpack the prefab by right-clicking it.

Place "Contact Tracker" at the base of your avatar.

Remove "Tracker Target" outside of "Contact Tracker" and place it anywhere in your avatar's hierarchy as needed.

## How to use

Place objects inside "Contact Tracker/Container" for attaching to the tracked contact. Alternatively, constrain objects to "Contact Tracker/Tracking Points".

You can edit the collision tags on the 7 receiver components in the "Contact Tracker/Tracking Points" hierarchy to change what contact senders can be tracked.

"ContactTracker.Control" parameter must be true for the system to be active.

"ContactTracker.Size.Min" parameter can be changed to scale the size of the tracker while it is not tracking.

## Examples

[Red's Player Tracker](https://github.com/hfcRed/Player-Tracker) implements this tracking method in a ready-to-go framework.

## Credit

[Red](https://github.com/hfcRed)

[Dreadrith](https://github.com/Dreadrith)

## Downloads

You can grab the latest version of the Contact Tracker in [Releases](https://github.com/VRLabs/Contact-Tracker/releases/latest).

## License

Contact Tracker is available as-is under MIT. For more information see [LICENSE](https://github.com/VRLabs/Contact-Tracker/blob/main/LICENSE).

## Contact us

If you need help, our support channel is on [Discord](https://discord.vrlabs.dev).
