              		var bluishStyle = [
					  {
						stylers: [
						  { hue: "#009999" },
						  { saturation: -5 },
						  { lightness: -40 }
						]
					  },{
						featureType: "road",
						elementType: "geometry",
						stylers: [
						  { lightness: 100 },
						  { visibility: "simplified" }
						]
					  },
					  {
						featureType: "water",
						elementType: "geometry",
						stylers: [
						  { hue: "#0000FF" },
						  {saturation:-40}
						]
					  },
					  {
						featureType: "administrative.neighborhood",
						elementType: "labels.text.stroke",
						stylers: [
						  { color: "#E80000" },
						  {weight: 1}
						]
					  },{
						featureType: "road",
						elementType: "labels.text",
						stylers: [
						  { visibility: "on" }
						]
					  },
					  {
						featureType: "road.highway",
						elementType: "geometry.fill",
						stylers: [
						  { color: "#00FF00" },
						  {weight: 2}
						]
					  }
					];