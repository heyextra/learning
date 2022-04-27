

		function makeChannel(url, pan) {
			const channel = new Tone.Channel({
				pan
			}).toDestination();
			const player = new Tone.Player({
				url: `./${url}.mp3`,
				loop: true
			}).sync().start(0);
			player.connect(channel);
        }
					
		// create a meter on the destination node
		const toneMeter = new Tone.Meter({ channels: 2 });
		Tone.Destination.chain(toneMeter)
		meter({
			tone: toneMeter,
			parent: document.getElementById("tone-play-toggle")
		});

		makeChannel("Guitar 0", "track1", 1);
		makeChannel("Guitar 1", "track2", -1);


		document.getElementById("tone-play-toggle").addEventListener("start", () => Tone.Transport.start());
		document.getElementById("tone-play-toggle").addEventListener("stop", () => Tone.Transport.stop());