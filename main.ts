function build_agent_grid(x: number, y: number, z: number) {
    blocks.fill(BRICKS, world(x, y, z), world(x + 11, y, z + 16), FillOperation.Outline)
    blocks.fill(AIR, world(x + 1, y, z + 1), world(x + 10, y, z + 15), FillOperation.Replace)
    blocks.fill(DIAMOND_BLOCK, world(x + 1, y - 1, z + 1), world(x + 10, y - 1, z + 15), FillOperation.Replace)
}

player.onChat("level1", function on_on_chat() {
    let gold_loc = []
    for (let index = 0; index < 10; index++) {
        gold_loc.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    }
    gold_loc[8] = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    gold_loc[7] = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    gold_loc[6] = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    gold_loc[5] = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    gold_loc[4] = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let x_1 = -36
    let y_1 = 64
    let z_1 = 1
    build_agent_grid(x_1, y_1, z_1)
    for (let i = 0; i < gold_loc.length; i++) {
        for (let j = 0; j < gold_loc[i].length; j++) {
            blocks.fill(GOLD_BLOCK, world(x_1 + i - 2, y_1, z_1 + j + 2), world(x_1 + i - 2, y_1, z_1 + j + 2), FillOperation.Replace)
        }
    }
})
player.onChat("level2", function on_on_chat3() {
    build_agent_grid(65, 69, 61)
})
player.onChat("run", function on_on_chat2() {
    agent.teleport(world(-35, 64, 2), SOUTH)
    agent.setSlot(1)
    agent.move(FORWARD, 5)
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 1)
    agent.turnRight()
    agent.destroy(FORWARD)
    agent.collect(GOLD_BLOCK)
    agent.move(LEFT, 1)
    agent.destroy(FORWARD)
    agent.collect(GOLD_BLOCK)
    agent.move(LEFT, 1)
    agent.destroy(FORWARD)
    agent.collect(GOLD_BLOCK)
    agent.move(LEFT, 1)
    agent.destroy(FORWARD)
    agent.collect(GOLD_BLOCK)
    agent.move(LEFT, 1)
    agent.destroy(FORWARD)
    agent.collect(GOLD_BLOCK)
    agent.move(LEFT, 1)
    agent.place(FORWARD)
})
