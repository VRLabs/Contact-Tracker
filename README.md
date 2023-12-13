<div align="center">

# Contact Tracker

[![Generic badge](https://img.shields.io/github/downloads/VRLabs/Contact-Tracker/total?label=Downloads)](https://github.com/VRLabs/Contact-Tracker/releases/latest)
[![Generic badge](https://img.shields.io/badge/License-MIT-informational.svg)](https://github.com/VRLabs/Contact-Tracker/blob/main/LICENSE)
[![Generic badge](https://img.shields.io/badge/Unity-2019.4.31f1-lightblue.svg)](https://unity3d.com/unity/whats-new/2019.4.31)
[![Generic badge](https://img.shields.io/badge/SDK-AvatarSDK3-lightblue.svg)](https://vrchat.com/home/download)

[![Generic badge](https://img.shields.io/discord/706913824607043605?color=%237289da&label=DISCORD&logo=Discord&style=for-the-badge)](https://discord.vrlabs.dev/)
[![Generic badge](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.vercel.app%2Fapi%3Fusername%3Dvrlabs%26type%3Dpatrons&style=for-the-badge)](https://patreon.vrlabs.dev/)

System for attaching objects to contacts on other players

![ContactTracker](https://github.com/VRLabs/Contact-Tracker/assets/76777936/0059a587-8ada-4891-bc18-bf5d5d7a6f6a)


### ⬇️ [Download Latest Version](https://github.com/VRLabs/Contact-Tracker/releases/latest)

<!-- 
### 📦 [Add to VRChat Creator Companion]() -->

</div>

---

## How it works

* Six overlapping Proximity Contacts feed their outputs into a parent constraint to center a GameObject on the target.
  * The GameObject contains the Proximity Contacts, making them center themselves on the target constantly.
* The ``Allow Others`` setting on the Contacts is turned off after the Contact Tracker has attached.
  * This prevents the Contact Tracker from tracking multiple Contacts.

## Install guide

https://github.com/VRLabs/Contact-Tracker/assets/76777936/39dd0fb1-9333-42d3-91b4-8c812a24792a

* Merge the Animator Controller ``Contact Tracker FX`` to your own FX Controller, using the [Avatars 3.0 Manager](https://github.com/VRLabs/Avatars-3.0-Manager) tool.
* Drag & drop the ``Contact Tracker`` prefab into the base of your Hierarchy.
* Right click and unpack the prefab, then drag & drop it onto your avatar.
* Expand the prefab hierarchy and find ``Tracker Target``.
* Move ``Tracker Target`` outside of ``Contact Tracker`` and place it anywhere in your avatar's hierarchy as needed.

## How to use

* Place the objects you want to attach to other players inside ``Contact Tracker`` -> ``Container``.
  * Alternatively you can constrain the objects to ``Contact Tracker`` -> ``Tracking Points``.
* Enable the ``ContactTracker/Control`` parameter to activate the system.
* You can edit the ``Collision Tags`` of the six Proximity Contacts to change which Contact Senders the Contact Tracker should track.
* The ``ContactTracker/Size`` parameter in the FX Controller can be changed to set the size of the Contact Tracker when it is not tracking.

## Additional notes

* The Blend Tree used in the ``Contact Tracker Blend Tree`` FX Layer **MUST** use Write Defaults **ON**!
* This is the only case in which mixing Write Defaults is okay, you do not need to switch your workflow.

## Performance stats

```c++
Constraints:        6
Contact Receivers:  6
FX Animator Layers: 2
Mesh Renderers:     1
Rigidbodies:        1
```

## Hierarchy layout

```html
Contact Tracker
|-Container
|  |-Cube
|-Tracking Points
|  |-Culling
|  |-X+
|  |-X-
|  |-Y+
|  |-Y-
|  |-Z+
|  |-Z-
|-Tracker Target
```

## Contributors

* [Red](https://github.com/hfcRed)
* [Dreadrith](https://github.com/Dreadrith)
* [lindesu](https://github.com/oofdesu)

## License

Contact Tracker is available as-is under MIT. For more information see [LICENSE](https://github.com/VRLabs/Contact-Tracker/blob/main/LICENSE).

​

<div align="center">

[<img src="https://github.com/VRLabs/Resources/raw/main/Icons/VRLabs.png" width="50" height="50">](https://vrlabs.dev "VRLabs")
<img src="https://github.com/VRLabs/Resources/raw/main/Icons/Empty.png" width="10">
[<img src="https://github.com/VRLabs/Resources/raw/main/Icons/Discord.png" width="50" height="50">](https://discord.vrlabs.dev/ "VRLabs")
<img src="https://github.com/VRLabs/Resources/raw/main/Icons/Empty.png" width="10">
[<img src="https://github.com/VRLabs/Resources/raw/main/Icons/Patreon.png" width="50" height="50">](https://patreon.vrlabs.dev/ "VRLabs")
<img src="https://github.com/VRLabs/Resources/raw/main/Icons/Empty.png" width="10">
[<img src="https://github.com/VRLabs/Resources/raw/main/Icons/Twitter.png" width="50" height="50">](https://twitter.com/vrlabsdev "VRLabs")

</div>

