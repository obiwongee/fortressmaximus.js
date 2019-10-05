String.prototype.ucwords = function() {
    str = this.toLowerCase();
    return str.replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g,
        function(s){
          return s.toUpperCase();
      });
  };

$(document).ready(function() {
    $.ajax({
        url: 'http://dev.fortressmaximus.com/api/cards'
    })
    .done(function(res) {
        var data = JSON.parse(res);
        var map = {};
        for (var i=0; i<data.length; i++) {
            var card = data[i];

            map[card.name.toLowerCase()] = {
                slug: card.slug,
                image: card.image,
                image2: card.image2
            };
        }

        $("body").html($("body").html().replace(/\[\[([A-Za-z\' ]*)\]\]/g, (m, $1) => generateLinks(m, $1, map)));

        imagePreview();
    });
});

generateLinks = function (match, cardName, map)
{
    if (map.hasOwnProperty(cardName.toLowerCase())) {
        return getLink(cardName, map[cardName.toLowerCase()]);
    }

    return match;
}

getLink = function(cardName, card)
{
    var baseUrl = "https://fortressmaximus.io/card/"

    var href = baseUrl + card.slug;

    var image1 = card.image;
    var image2 = card.image2 || null;

    var link = $('<a>', {
        text: cardName.ucwords(),
        class: "preview",
        href: href,
        "data-image": image1,
        "data-image2": image2
    });

    return link[0].outerHTML;
}

imagePreview = function()
{
	$("a.preview").hover(function(e){
		this.t = this.title;
		this.title = "";
        var c = (this.t != "") ? "<br/>" + this.t : "";

        var preview = $("<p>", {
            id: "preview"
        });

        if ($(this).data("image") !== null) {
            var image = $("<img>", {
                src: $(this).data("image")
            });
            preview.append(image);
        }

        if ($(this).data("image2") !== null) {
            var image = $("<img>", {
                src: $(this).data("image2")
            });
            preview.append(image);
        }

        $(this).append(preview);
		$("#preview")
			.css("top",(e.pageY + 10) + "px")
            .css("left",(e.pageX) + "px")
            .css("position", "absolute")
			.fadeIn("fast");
    },
	function(){
		this.title = this.t;
		$("#preview").remove();
    });
};