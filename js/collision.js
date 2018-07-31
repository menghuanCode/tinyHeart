// 碰撞检测

// 判断	大鱼与果实的距离
function momFruitsCollision() {
    for(let i = 0; i < fruit.num; i++) {
        if (fruit.alive[i]) {
            // 计算长度
            let l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
            if( l < 900) {
                fruit.dead(i);
                data.fruitNum++;
                if (fruit.fruitType[i] == "blue") {
                    // blue
                    data.double = 2;
                }
            }
        }
    }
}

// 判断	大鱼与小魚的碰撞
function momBabyCollision() {
	let l = calLength2(mom.x, mom.y, baby.x, baby.y);
	if (l < 900) {
		// baby recover
		baby.babyBodyCount = 0;
	    // data => 0
        data.reset();
	}
}
