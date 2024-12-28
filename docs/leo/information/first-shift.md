---
sidebar_position: 3
---

# First Shift

Congrats on passing the application and training phase for becoming a LEO!

(If you are looking to appy, check out [Getting Started as a LEO](https://docs.kcdojrp.com/docs/leo/apply))

Now, we'll learn the basics of being a LEO and how to get started on your first shift!

For these examples your callsign is 2N(Nora)-40.
Dispatch is 6-5-1(Six Five One)

Before going on shift you should get your radar setup.
Check out [this guide](https://docs.kcdojrp.com/docs/leo/tools/radar) on how to do so!

Once you are ready to go, Open up the [CAD](https://cad.kcdojrp.com/citizen), Go to your [officer dashboard](https://cad.kcdojrp.com/officer) and mark yourself 10-8(In service and available)

If their is an active dispatch you'll also need to say over the radio;
LEO:
> 651 2N-40

Dispatch:
> 2N-40 Go ahead

LEO:
> 2N-40 I'll be 10-8

If no dispatch is online, Simply announce over the radio:
> 2N-40 will be 10-8


## Traffic Stop

The main things to say when on a traffic stop are 1. Who you are, 2. Location, 3. Vehicle description.
You'll always say the unit you are calling first, then your callsign.

If you ever need additionals to the traffic stop, Simply say, Requesting additionals.

### W/O dispatch
(Without dispatch online)

> 2N-40 I'll be out on traffic at [postal] [street/location] with a [color] [make/model/type] [plate type] [plate] occupied times [count] 

To explain this further, You are calling out on the radio you have initiated a traffic stop at a location, Next you are giving out the description of the vehicle incase it's needed to locate at a later time and for dispatch to reference when searching for the vehicle, and lastly you are giving out the occupancy of the vehicle, So how many people are in the vehicle, If unknown don't include this.

Example:
> 2N-40 I'll be out on traffic at 9883 El Rancho Boulevard with a red BMW SUV San Andreas 12ABC34 occupied times 1

You should also generate a call in the CAD.
Lock the vehicle plate on your [radar](https://docs.kcdojrp.com/docs/leo/tools/radar) and run the command `/tstop [reason]` replace "[reason]" with the reason/details of the traffic stop.
This will automatically create a traffic stop call in the CAD assign you and your vehicle to it.

Make contact with the individual at the vehicle.
> My name is [officer/deputy/rank] [last name] with the [department]

Mosty officers will say `Do you know why I pulled you over today` next.
But you can say many things like `Any reason for the speed today` or `I clocked you going 55 in a 25 back there`
This is up to the officer and their discretion.

You should ask for 3 things from the driver of the vehicle.
1. Drivers License/Proof of ID
2. Vehicle Registration
3. Insurance Information/Proof of Insurance.

The civillian should do `/me [civ name]` to provide you their name.

You will then let them know you will run their information and to stay in the vehicle.

Head back to your vehicle and here is where we will start running all of the information.
In the [CAD](https://cad.kcdojrp.com/officer) do a name search for the name provided and a vehicle search for the vehicle.
Make sure to check things like Valid Drivers License, Flags, Warrants, Insurance status, etc.

I also suggest putting in the event logs of the call your drivers name and plate.
Ex. `31: JOHN DOE, 28: 12ABC24`
10-31 beaing ID/Check ID and 10-28 being registration/check registration.

After confirming their 3 documents are all valid with no issues, it's up to the officer on how to proceed, You may issue a verbal or written warning, ticket, or even an arrest.

Based on what you do may change how you proceed. Verbal warnings are not logged in the CAD.
When issuing a written warning/ticket/arrest make sure to include the vehicle and attach the call via the ID in the `Connections` tab.

Once completed, If the driver is let go, Give them the documents back and advise them of your decision. Inform them that they are free to go once you turn your emergency lights off.

Head back to your vehicle, Turn your lights off and finish off your report.
In the call we generated, Select the department, call type(TSTOP) and Fill in the details box with the initial stop timeline.
Ex;
> I clocked a speeding red SUV at 55mph in a 25mph zone on El Rancho Boulevard and initiated a traffic stop at 9883.

In the events you'll include your conclusion, Such as ticket or verbal warning and any other findings.

End the call and go back 10-8.

On the radio you'll announce your callsign, status, and disposition code(aka david code).
> [callsign] [disposition code][race] [reason] [status]

Ex.
> 2N-40 D4W Speed 10-8

2N-40 being your callsign, D4W is the disposition code, D4 being warned and W mean White(race), 10-8 meaning you are clear and available.

### W Dispatch
(with an active dispatcher)

LEO:
> 651 2N-40 Traffic

You are letting dispatch know you are out on a traffic stop and ready to give them the information. However to avoid overwhelming the dispatch on the radio or if they are on a 911 call we don't provide the information till dispatch is ready.

Dispatch:
> 2N-40 Go ahead

Dispatch may also ask you to standby(wait) if they are dealing with another call.

LEO:
> 2N-40 I'll be out on traffic at [postal] [street/location] with a [color] [make/model/type] [plate type] [plate] occupied times [count]

Dispatch:
> Copy 2N-40 out at [postal] standby for return.

Dispatch acknolwedges the location, If dispatch says the wrong postal, Let them know.
Standby for return means they are searching the plate(if one was given).

Dispatch should be generating a CFS(Call for service) for you and assign you to it.

Make contact with the individual at the vehicle.
> My name is [officer/deputy/rank] [last name] with the [department]

Mosty officers will say `Do you know why I pulled you over today` next.
But you can say many things like `Any reason for the speed today` or `I clocked you going 55 in a 25 back there`
This is up to the officer and their discretion.

You should ask for 3 things from the driver of the vehicle.
1. Drivers License/Proof of ID
2. Vehicle Registration
3. Insurance Information/Proof of Insurance.

The civillian should do `/me [civ name]` to provide you their name.

You will then let them know you will run their information and to stay in the vehicle.

By this time dispatch will have your return for the plate, and you can radio in the driver name.

LEO:
> 651 2N-40 10-31 when ready.

This lets dispatch that you have a name/ID needing to be ran.
Dispatch:
> 2N-40 go ahead with your 31.

LEO:
> First is going to be [FIRST NAME], Last will be [LAST NAME], Common spelling.

Dispatch may ask to confirm a DOB if multiple people have that same name.
If the name is a none standard name, Spell the name using the [Phonetic Alphabet](https://docs.kcdojrp.com/docs/leo/information/codes#phonetic-alphabet)

Dispatch:
> 2N-40 standby.

Dispatch:
> 2N-40 your 28 returns [vehicle registration status] and you 31 returns [civ status].

10-28 meaning vehicle registration, 10-31 meaning ID.

Ex;
> 2N-40 your 28 returns to a valid red Dodge Charger registered to John Doe and you 31 returns valid, negative 29s.

10-29 meaning warrants.

LEO:
> 2N-40 Copy, I'll be back out with the driver.

Based on what you do may change how you proceed. Verbal warnings are not logged in the CAD.
When issuing a written warning/ticket/arrest make sure to include the vehicle and attach the call via the ID in the `Connections` tab.

Once completed, If the driver is let go, Give them the documents back and advise them of your decision. Inform them that they are free to go once you turn your emergency lights off.

Head back to your vehicle, Turn your lights off and finish off your report.
Fill in the details box with the initial stop timeline.
Ex;
> I clocked a speeding red SUV at 55mph in a 25mph zone on El Rancho Boulevard and initiated a traffic stop at 9883.

Once your narrative has been added you'll announce over the radio you are clear.
LEO:
> 651 [callsign] [disposition code][race] [reason] [status]

Ex.
> 651 2N-40 D4W Speed 10-8

2N-40 being your callsign, D4W is the disposition code, D4 being warned and W mean White(race), 10-8 meaning you are clear and available.

Dispatch:
> Copy 2N-40 D4W Speed 10-8



## Vehicle Pursuit Procedures

When initiating a vehicle pursuit, it's crucial to assess the situation carefully. A pursuit should only be started if the severity of the offense justifies the potential risks to public safety. For example, if a vehicle commits a very minor traffic violation and then flees recklessly, **do not** initiate a pursuit. Public safety and the safety of officers are the top priorities.

### Initiating a Pursuit

When a pursuit is necessary, start by calling it out on the radio with the following information:

> 2N-40, I'll be in an active pursuit with a [Vehicle description] starting [postal] heading [direction] on [road].

Example:
> 2N-40, I'll be in an active pursuit with a red BMW SUV starting at 9883 heading southbound on El Rancho Boulevard.

### Providing Updates

During the pursuit, regularly update dispatch and other units with key information such as:

- **Road conditions:** Example: "Roads are wet, light traffic."
- **Vehicle direction:** Example: "Now heading eastbound on Joshua Road."
- **Suspect behavior:** Example: "Suspect is driving erratically, weaving through traffic."
- **Any changes:** Example: "Suspect has bailed on foot at 8500 Marina Drive, now in foot pursuit."

### Pursuit Management

Remember the following guidelines while managing the pursuit:

- **5-Minute PIT Timer:** Pitting the suspect vehicle is allowed, but only once every 5 minutes and when approved by a supervisor. Ensure you communicate clearly over the radio when a PIT has been executed and wait for the timer to reset before attempting another.
- **30-Minute Pursuit Limit:** From the civilian perspective, pursuits are limited to a maximum of 30 minutes. If the pursuit reaches this limit, it should be terminated to maintain server integrity and realism.

### Spike Strip Deployment

Spike strips are a valuable tool for safely ending a pursuit. Follow these steps to deploy and manage spike strips:

1. **Access the LEO Actions Menu:** Open the menu and select "Deploy Spikes."
2. **Deploy the Spikes:** Position them effectively to stop the fleeing vehicle without endangering civilians or officers.
3. **Retrieving the Spikes:** After the pursuit or if the spikes were not successful, select "Deploy Spikes" again to pick up the spikes.

### Terminating a Pursuit

A pursuit should be terminated in the following scenarios:

- **Public Safety Risk:** If the pursuit endangers the public or the officers involved.
- **Minor Offenses:** If the initial reason for the stop was a minor offense and the suspect flees recklessly.
- **Pursuit Time Limit:** If the pursuit exceeds the 30-minute limit set for civilians.
- **Command Orders:** If a supervisor or command officer orders the pursuit to be terminated.

Once a pursuit is terminated, notify dispatch, create a BOLO, and ensure all units are informed. Example:

> 2N-40, terminating pursuit, suspect last seen heading westbound on Joshua Road. Returning to 10-8.

This concludes the pursuit process. Ensure you follow all safety protocols and use your judgment to balance enforcement with public safety.

## Felony Traffic Stop (Code 5)

A Felony Traffic Stop, also known as a Code 5, should be used when dealing with suspects of a felony crime. This procedure is critical for ensuring the safety of the public, officers, and the suspect(s). 

### Requesting Additional Units

Before initiating a Felony Traffic Stop, request additional units to assist, if available. Proper coordination is key to safely handling the situation.

> [callsign], I'll be out on a felony stop at [postal] on a [vehicle description], requesting additional units.

### Positioning Your Vehicle

1. **Block the Roadway:** Position your vehicle at a slight angle behind the suspect vehicle, approximately 1/2 to 1 car length away. If you have additional units, ensure the roadway behind the suspect vehicle is completely blocked. This positioning helps ensure public safety.
   
2. **Staging Units:** If you have 4 or more units, stage one further down the road in case the suspect vehicle attempts to flee. This unit can serve as a secondary containment or pursuit unit.

### Conducting the Felony Stop

1. **Take Cover:** Once all units are in position, exit your vehicle while ensuring the door remains open for cover. To do this, press and hold your vehicle exit button.
   
2. **Draw Your Firearm:** Aim your firearm toward the suspect vehicle, ensuring you are protected behind your vehicle door.

3. **Give Orders:** Make contact with the suspect(s) by issuing clear and loud commands. Instruct the driver and passengers to exit the vehicle one at a time, keeping their hands visible. They should be directed to use the command `/hu` to show their hands.

4. **Maintain Vigilance:** At least one officer should always watch the suspect vehicle for additional occupants who may attempt to exit or flee.

### Securing the Scene

1. **Detaining Suspects:** As each suspect exits, direct them to walk backward towards your position where they will be detained and handcuffed. Ensure all suspects are secured before approaching the vehicle.
   
2. **Clearing the Vehicle:** Once all suspects are in custody, approach the vehicle with your partner(s) to clear it of any remaining occupants or potential threats.

3. **Search and Process:** Conduct a thorough search of the vehicle, documenting and processing any evidence found. Be meticulous in recording details for the subsequent report.

### Final Steps

- **Report Writing:** Write a detailed report of the felony traffic stop, including all actions taken, evidence collected, and the outcome of the situation. Ensure the report is accurate and thorough.
  
- **Proceed as Necessary:** Depending on the findings and circumstances, proceed with the necessary legal actions, such as arresting the suspects, filing charges, and processing evidence.

This procedure ensures that felony traffic stops are conducted safely and effectively, minimizing risk to all parties involved.
