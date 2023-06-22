import kaboom from "kaboom"

const k = kaboom(
	{
		scale: 4,
		background: [0,0,0]
	}
)

k.loadSprite("bean", "sprites/bean.png")

k.add([
	k.pos(120, 80),
	k.sprite("bean"),
])

k.onClick(() => k.addKaboom(k.mousePos()))