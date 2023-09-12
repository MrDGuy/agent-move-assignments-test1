


def build_agent_grid(x,y,z):
    blocks.fill(BRICKS, world(x, y, z),world(x+11, y, z+16),FillOperation.OUTLINE)
    blocks.fill(AIR, world(x+1, y, z+1),world(x+10, y, z+15),FillOperation.REPLACE)
    blocks.fill(DIAMOND_BLOCK,world(x+1, y-1, z+1),world(x+10, y-1, z+15),FillOperation.REPLACE)
    
def on_on_chat():
    gold_loc = []
    for index in range(10):
        gold_loc.append([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])
    gold_loc[8]=[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0]
    gold_loc[7]=[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0]
    gold_loc[6]=[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0]
    gold_loc[5]=[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0]
    gold_loc[4]=[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0]
    x_1 = -36
    y_1 = 64
    z_1 = 1
    build_agent_grid(x_1,y_1,z_1)
    for i in range(len(gold_loc)):
        for j in range(len(gold_loc[i])):
            blocks.fill(GOLD_BLOCK,world(x_1+i-2,y_1,z_1+j+2),world(x_1+i-2,y_1,z_1+j+2),FillOperation.Replace)
    
    
player.on_chat("level1", on_on_chat)


def on_on_chat3():
    build_agent_grid(65,69,61)
player.on_chat("level2", on_on_chat3)

def on_on_chat2():
    agent.teleport(world(-35, 64, 2), SOUTH)
    agent.set_slot(1)
    agent.move(FORWARD, 5)
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 1)
    agent.turn_right()
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
player.on_chat("run", on_on_chat2)


