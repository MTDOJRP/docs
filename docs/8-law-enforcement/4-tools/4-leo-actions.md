# Leo Actions

<br/>

#### Find out what you can do with LEO Actions!

All of the actions you see here can be found within the **[F5 Menu](/docs/kc-menu/kcmenu)**.<br/>
And this is what the menu that you're looking for looks like:

<br/>

![Leo Actions Menu](/imgs/leo-actions-menu.png)

<br/>

### Actions Breakdown

Here's a full breakdown of each action that you can do with the LEO Action menu, as well as how they work and key binding information.

<br/>

<details open>
  <summary>LEO Actions - **Drag Nearest Player**</summary>

  It is used to drag suspects or officers around. You can drag someone who is either handcuffed or not handcuffed. This will attach the player to you and allow you to use the "Place in Vehicle" action on the player.

  <br/>

  #### Default Key Binding
  There is no default key binding for this action. To set one, head to:<br/>
  `Settings > Key Bindings > FiveM > "(KC-Core) Drag Nearest Player"`

  <br/>

  #### Command Usage
  You can also use the command `/drag` to drag the nearest player.
</details>

:::warning Drag Nearest Player (Radius)
Remember! This will drag the nearest player to you. Make sure to ask other players to step away from you so you do not drag another player instead of your target.
:::

<br/>

<details open>
  <summary>LEO Actions - **Cuff Nearest Player**</summary>

  This is a simple way for you to prevent a player from being able to use their weapons, steering vehicles, and some other actions. You should **always** have the target player handcuffed before you try to use the "Drag Nearest Player" action.

  It is important that you ask other players to step away from you so you do not cuff another player instead of cuffing your target. **It is also important to note that players can run in cuffs, so be careful to drag the player you cuffed if you are intending to arrest or detain them.**

  <br/>

  #### Default Key Binding
  There is no default key binding for this action. To set one, head to:<br/>
  `Settings > Key Bindings > FiveM > "(KC-Core) Cuff Nearest Player"`

  <br/>

  #### Command Usage
  You can also use the command `/cuff` to handcuff the nearest player.

</details>

:::warning Cuff Nearest Player (Radius)
Remember! This will handcuff the nearest player to you. Make sure to ask other players to step away from you so you do not cuff another player instead of cuffing your target.
:::

<br/>

<details open>
  <summary>LEO Actions - **Place In Vehicle**</summary>

  This allows you to place players who are dragged in to the back of your vehicle. Useful for detaining suspects and transporting them. You can only use this action on the player that you are currently dragging by getting close to the vehicle you want to place them in.

  <br/>

  #### Default Key Binding
  There is no default key binding for this action. To set one, head to:<br/>
  `Settings > Key Bindings > FiveM > "(KC-Core) Place In Vehicle"`

  <br/>

  #### Command Usage
  You can also use the command `/piv` to place the nearest player in your vehicle.
</details>

:::danger Doors are Locked!
Emergency Vehicles (such as law enforcement vehicles) are equipped with doors that are locked by default. Your suspect will not be able to open the doors and exit your vehicle until you use the "Drag Nearest Player" action on them again.
:::

<br/>

<details open>
  <summary>LEO Actions - **Deploy Spike Strips**</summary>

  When using the action within the menu, you can select between 1 - 5 spike strips to deploy. These work by deploying the specified number of spike strips in a line in front of you and **any vehicle that goes over them will have their tires blown off**. Useful for trying to trying to end a vehicle pursuit!

  We recommend being careful when using this action, as it can and will cause damage to other vehicles, including NPCs, and public safety is a top priority!

  <br/>

  #### Default Key Binding
  There is no default key binding for this action, and one cannot be set at this time.

  <br/>

  #### Command Usage
  You can also use the command `/spikes <number>` to deploy the specified number of spike strips. You cannot use more than 5 spike strips at a time.
</details>

:::warning Removing Spike Strips
If you want to remove the spike strips, you can either use `/spikes`, or click on the "Spike Strips" action in the menu.
:::

<br/>

<details open>
  <summary>LEO Actions - **Check BAC for Nearest Player**</summary>

  An action that allows you to check the Blood Alcohol Content (BAC) of the nearest player. This will return the BAC of the player as a notification on your screen.

  <br/>

  #### Default Key Binding
  There is no default key binding for this action, and one cannot be set at this time.
  
  <br/>

  #### Command Usage
  You can also use the command `/bac` to check the BAC of the nearest player.
</details>

:::warning Blood Alcohol Content (Radius)
Remember! This will check the BAC of the nearest player to you. Make sure to ask other players to step away from you so you do not check the level of another player instead of your target.
:::

<br/>

<details open>
  <summary>LEO Actions - **Use RIOT Shield**</summary>

  This allows you to equip a bullet proof riot shield along with a pistol. This shield is actually bullet proof and will protect you from bullets, but its important to crouch, otherwise it will not protect your legs!

  <br/>

  #### Default Key Binding
  There is no default key binding for this action, and one cannot be set at this time.

  <br/>

  #### Command Usage
  You can also use the command `/riot` to equip the riot shield.
</details>

<br/>
---
<br/>

### Speed Zones Menu

A very useful feature that allows you to set a speed zone for nearby traffic and control the speed of vehicles in that zone. Useful for stopping pesky GTA:V AI vehicles from running you over in the middle of a scene!

You can find this menu in the **[F5 Menu](/docs/kc-menu/kcmenu)**.<br/>
And this is what the menu that you're looking for looks like:

<br/>

![Speed Zones Menu](/imgs/speed-zones-menu.png)

<br/>

<details open>
  <summary>Speed Zones - **Configure A Speed Zone**</summary>

  - **Speed Limit**: allows you to set a speed limit of how fast you want AI to move in your speed zone. This is useful if AI get spooked or a gun gets pulled out. Its helpful to keep the limit at zero, so they cant accidentally run you over. Note: This will not affect Players in any way. They can drive around the AI.<br/>
    *You can set any speed between `0` and `75` MPH for the speed limit.*

  - **Radius**: allows you to set as big as a radius you want to stop AI from moving, but it is important to keep it as small as possible so that it doesn't interrupt traffic as much.<br/>
    *You can set any number between `5` and `40` for the radius.*

  - **Create Speed Zone**: once you click this, the speed zone will be created around your current position!
</details>

:::warning Manage Speed Zones
At the top of that menu, you will see an option to `Manage Speed Zones`. This will allow you to delete any speed zones that have been created. Please avoid deleting other people's speed zones, as it can mess with their scenes.
:::
