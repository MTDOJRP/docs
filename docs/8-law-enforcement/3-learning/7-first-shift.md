# First Shift Expectations

<br/>

:::tip First Shift Expectations
Congrats on passing the application and training phase for becoming a LEO!<br/>
*(If you are looking to apply, check out [Getting Started as a LEO](/docs/law-enforcement/apply))*

Now, we'll learn the basics of being a LEO and how to get started on your first shift!
:::

<br/>
---
<br/>

### Let's Get Started!

Let's get you started! Before we begin, we need to make sure you've got the basic information for the examples which will be used throughout this guide.
1. Your call-sign: `2N-40` *("2-Nora-40")*
2. Dispatch call-sign: `6-5-1` *("Six-Five-One")*

<br/>

<details open>
  <summary>Setting Up - **Radio Access & Setup**</summary>

  Before going on shift, you'll want to join the [Radio Frequency](/docs/law-enforcement/tools/radio)!
    - Command: `/radio`
    - Frequency: `155 MHZ`
</details>

<details open>
  <summary>Setting Up - **Your Radar**</summary>

  You will also want to set up your [Radar](/docs/law-enforcement/tools/radar) to track people's speeds.
    - [Click here](/docs/law-enforcement/tools/radar) to learn how to set up your radar.
</details>

<details open>
  <summary>Setting Up - **In Service**</summary>

  Ready for your shift? Make sure you're in service!

  If dispatch is online, you'll want to let them know you're going 10-8 instead, as they'll be handling the CAD for you.

  <br/>

  :::note Radio Conversation (with dispatch)
  - **You**: "651 2N-40"
  - **Dispatch**: "2N-40 go ahead"
  - **You**: "2N-40 I will be 10-8"
  :::

  <br/>

  If there's no dispatch online, you'll simply just need to announce yourself as `10-8` *("In Service")* over the radio.
  - Open up the [CAD](/docs/the-cad/the-cad), and head to `Officer > Dashboard` then mark yourself as `10-8` *("In Service")*

  <br/>

  :::note Radio Conversation (without dispatch)
  - **You**: "2N-40 will be 10-8"
  :::
</details>

<br/>
---
<br/>

### Traffic Stops

Now that you're in service, it's time for some traffic stops! Let's get you started with some basics.

<br/>

:::info The main things to say when on a traffic stop
- **Who you are** - *(your callsign)*
- **Your location** - *(street name, nearest postal, etc.)*
- **Vehicle description** - *(make, model, color, plate, etc.)*
:::

:::tip Top Tips!
- You'll always say the **unit you are calling first**, then your call-sign.
- If you ever need additionals to the traffic stop, simply say: "**Requesting additionals**" over the radio.
:::

<br/>

Use the buttons below to switch between "with dispatch" and "without dispatch" scenarios. Let's get into some radio conversation examples!

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="with">
  <TabItem value="without" label="Without Dispatch" default>

<br/>

<details open>
  <summary>Traffic Stop - **Before Exiting Your Vehicle**</summary>

  You will want to start with announcing the traffic stop over the radio, so that all other units know what you're doing.

  - **You**: "2N-40 I'll be out on traffic at [postal] [street/location] with a [color] [make/model/type] [plate type] [plate] occupied times [count]"<br/><br/>
    *To explain this further, in this scenario you are calling out on the radio, you have initiated a traffic stop at a location, you have then given out the description of the vehicle incase it's needed to be located at a later time and for dispatch to reference when searching for the vehicle, and lastly you are giving out the occupancy of the vehicle; That is, how many people are in the vehicle; If unknown don't include this.*

  <br/>

  #### For example:

  - **You:** "2N-40 I'll be out on traffic at 9883 El Rancho Boulevard with a red BMW SUV San Andreas 12ABC34 occupied times 1"

  <br/>

  #### You should also generate a call in the CAD.
  Lock the vehicle plate on your [radar](/docs/law-enforcement/tools/radar) and run the command `/tstop [reason]`, replace "[reason]" with the reason/details of the traffic stop.

  This will automatically create a traffic stop call in the CAD; make sure to assign you and your vehicle to it.
</details>

<details open>
  <summary>Traffic Stop - **Talking to the Driver**</summary>

  Then, make contact with the individual at the vehicle.

  - **You:** "My name is [officer/deputy/rank] [last name] with the [department]"<br/><br/>
  *Most officers will say something along the lines of `Do you know why I pulled you over today?`.
  But you can say many things like `Any reason for the speed today` or `I clocked you going 55 in a 25 back there` Ultimately, this is up to the officer and their discretion.*

  <br/>

  #### You should ask for 3 things from the driver of the vehicle:
  1. Drivers License/Proof of ID
  2. Vehicle Registration
  3. Insurance Information/Proof of Insurance

  *The civilian should do `/me [civ name]` to provide you their name.*
</details>

<details open>
  <summary>Traffic Stop - **Running the Information / Documents**</summary>

  You will then let the driver know you will run their information and to stay in the vehicle.

  Head back to your vehicle and here is where we will start running all of the information.
  In the [CAD](https://cad.kcdojrp.com/officer) do a name search for the name provided and a vehicle search for the vehicle.
  Make sure to check things like Valid Drivers License, Flags, Warrants, Insurance Status, etc.

  We also suggest putting in the event logs of the call your drivers name and plate.<br/>
  Example: `31: JOHN DOE, 28: 12ABC24` *10-31 being ID/Check ID, and 10-28 being registration/check registration.*
</details>

<details open>
  <summary>Traffic Stop - **Decision Making**</summary>

  After confirming their 3 documents are all valid with no issues, it's up to the officer on how to proceed. You may issue a verbal or written warning, ticket, or even an arrest.

  Based on what you do may change how you proceed. Verbal warnings are not logged in the CAD.
  When issuing a written warning/ticket/arrest make sure to include the vehicle and attach the call via the ID in the `Connections` tab.

  Once completed, if the driver is let go, give them the documents back and advise them of your decision. Inform them that they are free to go once you turn your emergency lights off.
</details>

<details open>
  <summary>Traffic Stop - **Report Writing**</summary>

  You'll now head back to your vehicle, turn your lights off and finish off your report.

  #### On the radio you'll announce your call-sign, status, and disposition code(aka david code)
  - [callsign] [disposition code][race] [reason] [status]
  - **You:** "2N-40 D4W Speed 10-8"<br/><br/>
  *2N-40 being your callsign, D4W is the disposition code, D4 being warned and W meaning White (race), 10-8 meaning you are clear and available.*

  <br/>

  In the call we generated, select the department, call type (TSTOP), and fill in the details box with the initial stop timeline.<br/>
  **For Example:** "I clocked a speeding red SUV at 55mph in a 25mph zone on El Rancho Boulevard and initiated a traffic stop at 9883."

  In the events you'll include your conclusion, such as ticket or verbal warning and any other findings.
  Once you filled everything out, end the call and go back 10-8.
</details>

  </TabItem>
  <TabItem value="with" label="With Dispatch">

<br/>

<details open>
  <summary>Traffic Stop - **Before Exiting Your Vehicle**</summary>

  Before you exit your vehicle, you will want to start with announcing the traffic stop over the radio, so that all other units know what you're doing.

  - **You**: "651 2N-40 Traffic"<br/>
    *You are letting dispatch know you are out on a traffic stop and ready to give them the information. However, to avoid overwhelming the dispatch on the radio, or if they are on a 911 call, we don't provide the information till dispatch is ready.*

    <br/>

  - **Dispatch**: "2N-40 Go ahead"<br/>
    *Dispatch may also ask you to standby (wait) if they are dealing with another call.*

    <br/>

  - **You**: "2N-40 I'll be out on traffic at [postal] [street/location] with a [color] [make/model/type] [plate type] [plate] occupied times [count]"<br/><br/>
    *To explain this further, in this scenario you are calling out on the radio, you have initiated a traffic stop at a location, you have then given out the description of the vehicle incase it's needed to be located at a later time and for dispatch to reference when searching for the vehicle, and lastly you are giving out the occupancy of the vehicle; That is, how many people are in the vehicle; If unknown don't include this.*

  - **Example:**: "2N-40 I'll be out on traffic at 9883 El Rancho Boulevard with a red BMW SUV San Andreas 12ABC34 occupied times 1"

  - **Dispatch**: "Copy 2N-40 out at [postal] standby for return."<br/><br/>
    *Dispatch acknolwedges the location; if dispatch says the wrong postal, let them know.
    Standby for return means they are searching the plate (if one was given).<br/><br/>
    Dispatch should be generating a CFS (Call for service) for you and assigning you to it.*

    <br/>

  While you're waiting for dispatch to finish the CFS, you can make contact with the individual at the vehicle.
</details>

<details open>
  <summary>Traffic Stop - **Talking to the Driver**</summary>

  Then, make contact with the individual at the vehicle.

  - **You:** "My name is [officer/deputy/rank] [last name] with the [department]"<br/><br/>
  *Most officers will say something along the lines of `Do you know why I pulled you over today?`.
  But you can say many things like `Any reason for the speed today` or `I clocked you going 55 in a 25 back there` Ultimately, this is up to the officer and their discretion.*

  <br/>

  #### You should ask for 3 things from the driver of the vehicle:
  1. Drivers License/Proof of ID
  2. Vehicle Registration
  3. Insurance Information/Proof of Insurance

  *The civilian should do `/me [civ name]` to provide you their name.*
</details>

<details open>
  <summary>Traffic Stop - **Running the Information / Documents**</summary>

  You will then let them know you will run their information and to stay in the vehicle.
  By this time dispatch will have your return for the plate, and you can radio in the driver name.

  #### You'll then proceed to request dispatch to run the information for you.
  - **You**: "651 2N-40 10-31 when ready."<br/>
    *This lets dispatch that you have a name/ID needing to be ran.*

  - **Dispatch**: "2N-40 go ahead with your 31."

  - **You**: "First is going to be [FIRST NAME]. Last will be [LAST NAME], using the common spelling of the name."<br/>
    *If the name is a none standard name, spell the name using the [Phonetic Alphabet](/docs/law-enforcement/learning/alphabet).*<br/>
    *Dispatch may ask to confirm a DOB if multiple people have that same name.*

  - **Dispatch**: "2N-40 standby."

  <br/>

  #### Dispatch will then run the information for you, wait for them to finish and radio you the information.

  - **Dispatch**: "2N-40 your 28 returns [vehicle registration status] and your 31 returns [civ status]."<br/>
    *10-28 meaning vehicle registration, 10-31 meaning ID.*<br/>
    *10-29 (or "29's") meaning warrants.*

  - **Example:** "2N-40 your 28 returns to a valid red Dodge Charger registered to John Doe and your 31 returns valid, negative 29s."

  <br/>

  - **You**: "2N-40 Copy, I'll be back out with the driver."
</details>

<details open>
  <summary>Traffic Stop - **Decision Making**</summary>

  Based on what you do may change how you proceed. Verbal warnings are not logged in the CAD.
  When issuing a written warning/ticket/arrest make sure to include the vehicle and attach the call via the ID in the `Connections` tab.

  Once completed, if the driver is let go, give them the documents back and advise them of your decision. Inform them that they are free to go once you turn your emergency lights off.
</details>

<details open>
  <summary>Traffic Stop - **Report Writing**</summary>

  Head back to your vehicle, turn your lights off and finish off your report.
  Fill in the details box with the initial stop timeline.

  **For example:** "I clocked a speeding red SUV at 55mph in a 25mph zone on El Rancho Boulevard and initiated a traffic stop at 9883."

  <br/>

  Once your narrative has been added you'll announce over the radio you are clear.

  - **You**: "651 [callsign] [disposition code][race] [reason] [status]"

  - **Example:** "651 2N-40 D4W Speed 10-8"<br/><br/>
    *2N-40 being your callsign, D4W is the disposition code, D4 being warned and W meaning White (race), 10-8 meaning you are clear and available.*

  <br/>

  - **Dispatch**: "Copy 2N-40 D4W Speed 10-8"
</details>

  </TabItem>
</Tabs>
