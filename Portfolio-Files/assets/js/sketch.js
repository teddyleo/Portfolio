// Sketch One
var starfield = function(p) {

    var stars = [];

    var speed;

    p.setup = function() {
        p.createCanvas(600, 600);
        for (var i = 0; i < 800; i++) {
            stars[i] = new Star();
        }
    }
    p.draw = function() {
        speed = p.map(p.mouseX, 0, p.width, 30, 80);
        p.background(0);
        p.translate(p.width / 2, p.height / 2);
        for (var i = 0; i < stars.length; i++) {
            stars[i].update();
            stars[i].show();
        }
    }

    function Star() {
        this.x = p.random(-p.width, p.width);
        this.y = p.random(-p.height, p.height);
        this.z = p.random(p.width);
        this.pz = this.z;

        this.update = function() {
            this.z = this.z - speed;
            if (this.z < 1) {
                this.z = p.width;
                this.x = p.random(-p.width, p.width);
                this.y = p.random(-p.height, p.height);
                this.pz = this.z;
            }
        }

        this.show = function() {
            var color = p.map(speed, 30, 80, 100, 200);

            p.fill(color);
            p.noStroke();

            var sx = p.map(this.x / this.z, 0, 1, 0, p.width);
            var sy = p.map(this.y / this.z, 0, 1, 0, p.height);

            var r = p.map(this.z, 0, p.width, 8, 0);
            p.ellipse(sx, sy, r, r);

            var px = p.map(this.x / this.pz, 0, 1, 0, p.width);
            var py = p.map(this.y / this.pz, 0, 1, 0, p.height);

            this.pz = this.z;

            p.stroke(color);
            p.line(px, py, sx, sy);
        }
    }
};
//var myp5 = new p5(starfield, 'starfield');

// Sketch Two 
var menger = function(p) {
    var a = 0;
    var b = 0;

    var clicks = 0;

    var sponge = [];

    p.setup = function() {
        p.createCanvas(500, 500, p.WEBGL);

        // An array of Box objects
        // Star with one
        var b = new Box(0, 0, 0, 200);
        sponge.push(b);
    }

    p.mousePressed = function() {
        if (p.mouseX > 0 && p.mouseX < p.width &&
            p.mouseY > 0 && p.mouseY < p.height) {
            clicks++;
            if (clicks > 2) {
                clicks = 0;
                sponge = [];
                var b = new Box(0, 0, 0, 200);
                sponge.push(b);
            } else {
                // Generate the next set of boxes
                var next = [];
                for (var i = 0; i < sponge.length; i++) {
                    var b = sponge[i];
                    var newBoxes = b.generate();
                    next = next.concat(newBoxes);
                }
                sponge = next;
            }
        }
    }

    p.draw = function() {
        var speedX = p.map(p.mouseX, 0, p.width, 0.01, 0.03);
        var speedY = p.map(p.mouseY, 0, p.width, 0.01, 0.03);

        p.background(51);
        p.rotateX(a);
        p.rotateY(b);
        p.rotateZ(a * 0.1);
        // Show what you've got!
        for (var i = 0; i < sponge.length; i++) {
            sponge[i].show();
        }
        a += speedX;
        b += speedY;
    }

    function Box(x, y, z, r) {
        this.pos = p.createVector(x, y, z);
        this.r = r;

        this.generate = function() {
            var boxes = [];
            for (var x = -1; x < 2; x++) {
                for (var y = -1; y < 2; y++) {
                    for (var z = -1; z < 2; z++) {
                        var sum = p.abs(x) + p.abs(y) + p.abs(z);
                        var newR = this.r / 3;
                        if (sum > 1) {
                            var b = new Box(this.pos.x + x * newR * 1.1,
                                this.pos.y + y * newR * 1.1, this.pos.z + z * newR * 1.1, newR);
                            boxes.push(b);
                        }
                    }
                }
            }
            return boxes;
        }

        this.show = function() {
            p.push();
            p.translate(this.pos.x, this.pos.y, this.pos.z);
            p.stroke(255);
            p.noStroke();
            p.noFill();
            p.box(this.r);
            p.pop();
        }
    }
};
//var myp5 = new p5(menger, 'menger');

// Sketch Three
var mazegen = function(p) {

    var cols, rows;
    var w = 20;
    var grid = [];
    var current, target;
    var stack = [];
    var stack2 = [];
    var found, generated;

    p.setup = function() {

        p.createCanvas(401, 401);
        cols = p.floor(p.width / w);
        rows = p.floor(p.height / w);
        grid = [];

        for (var j = 0; j < rows; j++) {

            for (var i = 0; i < cols; i++) {

                var cell = new Cell(i, j);
                grid.push(cell);

            }

        }

        current = undefined;
        target = grid[rows * cols - 1];
        found = false;
        generated = false;

    }

    p.draw = function() {

        if (currentp5 != ".mazegen") return;

        p.background(0);

        for (var i = 0; i < grid.length; i++) {

            grid[i].show();

        }

        if (!current) {

            p.textSize(26);
            p.fill(255);
            p.text("Click to begin!", 30, p.height - 30);
            return;

        }

        if (found) {

            p.textSize(26);
            p.fill(255);
            p.text("Fin! Click to reset!", 30, p.height - 30);
            return;

        }

        if (!generated) {

            current.visited = true;
            current.highlight();

            var next = current.checkNeighbors();

            if (next) {

                next.visited = true;
                stack.push(current);
                removeWalls(current, next);
                current = next;

            } else if (stack.length > 0) {

                current = stack.pop();

            } else {

                generated = true;
                current.stepped = true;

            }

        } else {

            current.stepped = true;
            current.highlight();
            var step = current.checkWalls();
            if (step) {

                step.stepped = true;
                stack2.push(current);
                current = step;

                if (step == target) {

                    found = true;

                }

            } else if (stack2.length > 0) {

                current = stack2.pop();

            }

        }

    }

    p.mousePressed = function() {

        if (!current) {

            if (p.mouseX > 0 && p.mouseX < p.width &&
                p.mouseY > 0 && p.mouseY < p.height) {

                current = grid[0];
                return;

            }

        }

        if (p.mouseX > 0 && p.mouseX < p.width &&
            p.mouseY > 0 && p.mouseY < p.height) {

            p.setup();
            return;

        }

    }

    function removeWalls(a, b) {

        var x = a.i - b.i;

        if (x === 1) {

            a.walls[3] = false;
            b.walls[1] = false;

        } else if (x === -1) {

            a.walls[1] = false;
            b.walls[3] = false;

        }

        var y = a.j - b.j;

        if (y === 1) {

            a.walls[0] = false;
            b.walls[2] = false;

        } else if (y === -1) {

            a.walls[2] = false;
            b.walls[0] = false;

        }

    }

    function index(i, j) {

        if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {

            return -1;

        }

        return i + j * cols;

    }

    function Cell(i, j) {

        this.i = i;
        this.j = j;
        this.walls = [true, true, true, true];
        this.visited = false;
        this.stepped = false;

        this.checkNeighbors = function() {

            var neighbors = [];

            var top = grid[index(i, j - 1)];
            var right = grid[index(i + 1, j)];
            var bottom = grid[index(i, j + 1)];
            var left = grid[index(i - 1, j)];

            if (top && !top.visited) neighbors.push(top);
            if (right && !right.visited) neighbors.push(right);
            if (bottom && !bottom.visited) neighbors.push(bottom);
            if (left && !left.visited) neighbors.push(left);

            if (neighbors.length > 0) {

                var r = p.floor(p.random(0, neighbors.length));
                return neighbors[r];

            } else {

                return undefined;

            }

        }

        this.checkWalls = function() {

            var neighbors = [];

            var top = grid[index(i, j - 1)];
            var right = grid[index(i + 1, j)];
            var bottom = grid[index(i, j + 1)];
            var left = grid[index(i - 1, j)];

            if (top && !top.stepped &&
                !this.walls[0]) neighbors.push(top);
            if (right && !right.stepped &&
                !this.walls[1]) neighbors.push(right);
            if (bottom && !bottom.stepped &&
                !this.walls[2]) neighbors.push(bottom);
            if (left && !left.stepped &&
                !this.walls[3]) neighbors.push(left);

            if (neighbors.length > 0) {

                var r = p.floor(p.random(0, neighbors.length));
                return neighbors[r];

            } else {

                return undefined;

            }


        }

        this.highlight = function() {

            var x = this.i * w;
            var y = this.j * w;
            p.noStroke();
            p.fill(255, 150);
            p.rect(x, y, w, w);

        }

        this.show = function() {

            var x = this.i * w;
            var y = this.j * w;
            p.stroke(255);

            if (this.walls[0]) p.line(x, y, x + w, y);
            if (this.walls[1]) p.line(x + w, y, x + w, y + w);
            if (this.walls[2]) p.line(x + w, y + w, x, y + w);
            if (this.walls[3]) p.line(x, y + w, x, y);

            if (this.visited) {

                p.noStroke();
                p.fill(255, 50);
                p.rect(x, y, w, w);

            }

            if (this.stepped) {

                p.noStroke();
                p.fill(255, 255, 0, 150);
                p.rect(x, y, w, w);

            }

            if (this.i == 0 && this.j == 0) {

                p.noStroke();
                p.fill(255, 0, 0, 150);
                p.rect(x + 1, y + 1, w - 1, w - 1);

            }
            if (this.i == rows - 1 && this.j == cols - 1) {

                p.noStroke();
                p.fill(0, 255, 0, 150);
                p.rect(x + 1, y + 1, w - 1, w - 1);

            }

        }

    }
}
var myp5 = new p5(mazegen, 'mazegen');

// Sketch Four
var gameoflife = function(p) {

    var cols, rows;
    var w = 10;
    var grid = [];
    var grid2 = [];
    var started = false;

    p.setup = function() {

        p.createCanvas(401, 401);
        cols = p.floor(p.height / w);
        rows = p.floor(p.width / w);

        for (var j = 0; j < rows; j++) {

            for (var i = 0; i < cols; i++) {

                grid.push(new Cell(i, j));

            }

        }

        p.frameRate(25);

    }

    p.draw = function() {

        if (currentp5 != ".gameoflife") return;

        p.background(0);

        for (var i = 0; i < grid.length; i++) {

            grid[i].show();

        }

        if (!started) {

            p.textSize(26);
            p.fill(255);
            p.text("Click to begin!", 30, p.height - 30);
            return;

        }

        calculateNext(grid);

    }

    function calculateNext(oldgrid) {

        var grid = [];

        for (var i = 0; i < oldgrid.length; i++) {

            grid[i] = oldgrid[i].checkAlive();

        }

        for (var i = 0; i < oldgrid.length; i++) {

            oldgrid[i].alive = grid[i];

        }

    }

    function random() {

        for (var i = 0; i < grid.length; i++) {

            var r = p.floor(p.random(0, 2));
            if (r == 0) grid[i].alive = true;
            if (r == 1) grid[i].alive = false;

        }

    }

    p.mousePressed = function() {

        if (!started) {

            if (p.mouseX > 0 && p.mouseX < p.width &&
                p.mouseY > 0 && p.mouseY < p.height) {

                started = true;
                random();
                return;

            }

        }

        if (p.mouseX > 0 && p.mouseX < p.width &&
            p.mouseY > 0 && p.mouseY < p.height) {

            random();
            return;

        }

    }

    function index(i, j) {

        if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {

            return -1;

        }

        return i + j * cols;

    }

    function Cell(i, j) {

        this.i = i;
        this.j = j;
        this.alive = false;

        this.show = function() {

            var x = this.i * w;
            var y = this.j * w;

            if (this.alive) {

                p.noStroke();
                p.fill(255);
                p.rect(x + 1, y + 1, w - 1, w - 1);

            } else {

                p.noStroke();
                p.fill(0);
                p.rect(x + 1, y + 1, w - 1, w - 1);

            }

        }

        this.checkAlive = function() {

            var neighbors = [];

            var top = grid[index(i, j - 1)];
            var right = grid[index(i + 1, j)];
            var bottom = grid[index(i, j + 1)];
            var left = grid[index(i - 1, j)];

            var topleft = grid[index(i - 1, j - 1)];
            var topright = grid[index(i + 1, j - 1)];
            var bottomleft = grid[index(i - 1, j + 1)];
            var bottomright = grid[index(i + 1, j + 1)];

            if (top && top.alive) neighbors.push(top);
            if (right && right.alive) neighbors.push(right);
            if (bottom && bottom.alive) neighbors.push(bottom);
            if (left && left.alive) neighbors.push(left);

            if (topleft && topleft.alive) neighbors.push(topleft);
            if (topright && topright.alive) neighbors.push(topright);
            if (bottomleft && bottomleft.alive) neighbors.push(bottomleft);
            if (bottomright && bottomright.alive) neighbors.push(bottomright);

            if (this.alive) {

                if (neighbors.length < 2) return false;
                if (neighbors.length == 2 ||
                    neighbors.length == 3) return true;
                if (neighbors.length > 3) return false;

            } else {

                if (neighbors.length == 3) return true;

            }

        }

    }

}
var myp5 = new p5(gameoflife, 'gameoflife');

// Sketch Five
var treegen = function(p) {

    // var tree;
    // var max_dist = 100;
    // var min_dist = 10;
    // var started = false;

    // p.setup = function() {

    //     p.createCanvas(400, 400);
    //     tree = new Tree();

    // }

    // p.draw = function() {

    //     if (currentp5 != ".treegen") return;

    //     p.background(51);
    //     tree.show();

    //     if (!started) {

    //         p.textSize(26);
    //         p.fill(255);
    //         p.text("Click to begin!", 30, p.height - 30);
    //         return;

    //     }

    //     if (!tree.leaves.length) {

    //         p.textSize(26);
    //         p.fill(255);
    //         p.text("Click to restart!", 30, p.height - 30);
    //         return;

    //     }

    //     tree.grow();

    // }

    // p.mousePressed = function() {

    //     if (p.mouseX > 0 && p.mouseX < p.width &&
    //         p.mouseY > 0 && p.mouseY < p.height) {

    //         if (!started) {

    //             started = true;
    //             return;

    //         }

    //         tree = new Tree();
    //         return;

    //     }

    // }

    // function Tree() {

    //     this.leaves = [];
    //     this.branches = [];

    //     for (var i = 0; i < 1500; i++) {

    //         this.leaves.push(new Leaf());

    //     }

    //     var pos = p.createVector(p.width / 2, p.height);
    //     var dir = p.createVector(0, -1);
    //     var root = new Branch(null, pos, dir);
    //     this.branches.push(root);
    //     var current = root;
    //     var found = false;

    //     while (!found) {

    //         for (var i = 0; i < this.leaves.length; i++) {

    //             var d = p5.Vector.dist(current.pos, this.leaves[i].pos);

    //             if (d < max_dist) {

    //                 found = true;

    //             }

    //         }

    //         if (!found) {

    //             var branch = current.next();
    //             current = branch;
    //             this.branches.push(current);

    //         }

    //     }

    //     this.grow = function() {

    //         for (var i = 0; i < this.leaves.length; i++) {

    //             var leaf = this.leaves[i];
    //             var closestBranch = null;
    //             var record = 100000;

    //             for (var j = 0; j < this.branches.length; j++) {

    //                 var branch = this.branches[j];
    //                 var d = p5.Vector.dist(leaf.pos, branch.pos);
    //                 if (d < min_dist) {
    //                     leaf.reached = true;
    //                     closestBranch = null;
    //                     break;
    //                 } else if (d > max_dist) {

    //                 } else if (closestBranch == null || d < record) {
    //                     closestBranch = branch;
    //                     record = d;
    //                 }

    //             }

    //             if (closestBranch != null) {

    //                 var newDir = p5.Vector.sub(leaf.pos, closestBranch.pos);
    //                 newDir.normalize();
    //                 closestBranch.dir.add(newDir);
    //                 closestBranch.count++;

    //             }
    //         }

    //         for (var i = this.leaves.length - 1; i >= 0; i--) {

    //             if (this.leaves[i].reached) {
    //                 this.leaves.splice(i, 1);
    //             }

    //         }

    //         for (var i = this.branches.length - 1; i >= 0; i--) {

    //             var branch = this.branches[i];

    //             if (branch.count > 0) {

    //                 branch.dir.div(branch.count + 1);
    //                 this.branches.push(branch.next());

    //             }

    //             branch.reset();

    //         }
    //     }

    //     this.show = function() {

    //         for (var i = 0; i < this.leaves.length; i++) {

    //             this.leaves[i].show();

    //         }

    //         for (var i = 0; i < this.branches.length; i++) {

    //             this.branches[i].show();

    //         }

    //     }

    // }

    // function Branch(parent, pos, dir) {

    //     this.pos = pos;
    //     this.parent = parent;
    //     this.dir = dir;
    //     this.origDir = this.dir.copy();
    //     this.count = 0;
    //     this.len = 5;

    //     this.reset = function() {

    //         this.dir = this.origDir.copy();
    //         this.count = 0;

    //     }


    //     this.next = function() {

    //         var nextDir = p5.Vector.mult(this.dir, this.len);
    //         var nextPos = p5.Vector.add(this.pos, nextDir);
    //         var nextBranch = new Branch(this, nextPos, this.dir.copy());
    //         return nextBranch;

    //     }

    //     this.show = function() {

    //         if (parent != null) {

    //             p.stroke(255);
    //             p.line(this.pos.x, this.pos.y, this.parent.pos.x, this.parent.pos.y);

    //         }

    //     }
    // }

    // function Leaf() {

    //     this.pos = p.createVector(p.random(p.width), p.random(p.height - 100));
    //     this.reached = false;

    //     this.show = function() {

    //         p.fill(255);
    //         p.noStroke();
    //         p.ellipse(this.pos.x, this.pos.y, 4, 4);

    //     }

    // }

    var angle;
    var axiom = "F";
    var sentence = axiom;
    var len = 100;
    var steps = 0;
    var started = false;

    var rules = [];
    rules[0] = {
        a: "F",
        b: "FF+[+F-F-F]-[-F+F+F]"
    }

    p.mousePressed = function() {

        if (p.mouseX > 0 && p.mouseX < p.width &&
            p.mouseY > 0 && p.mouseY < p.height) {

            if (!started) started = true;
            steps++;

            if (steps == 6) {

                len = 100;
                sentence = "F";
                steps = 0;
                turtle();
                return;

            }

            generate();
            return;

        }

    }

    function generate() {

        len *= 0.5;
        var nextSentence = "";

        for (var i = 0; i < sentence.length; i++) {

            var current = sentence.charAt(i);
            var found = false;

            for (var j = 0; j < rules.length; j++) {

                if (current == rules[j].a) {

                    found = true;
                    nextSentence += rules[j].b;
                    break;

                }

            }

            if (!found) {

                nextSentence += current;

            }
        }

        sentence = nextSentence;
        turtle();

    }

    function turtle() {

        p.background(51);

        if (!started) {

            p.textSize(26);
            p.fill(255);
            p.text("Click to begin!", 30, p.height - 30);

        } else {

            p.textSize(26);
            p.fill(255);
            p.text("Click!", 30, p.height - 30);

        }

        p.resetMatrix();
        p.translate(p.width / 2, p.height);
        p.stroke(255, 100);

        for (var i = 0; i < sentence.length; i++) {

            var current = sentence.charAt(i);

            if (current == "F") {

                p.line(0, 0, 0, -len);
                p.translate(0, -len);

            } else if (current == "+") {

                p.rotate(angle);

            } else if (current == "-") {

                p.rotate(-angle)

            } else if (current == "[") {

                p.push();

            } else if (current == "]") {

                p.pop();

            }

        }

    }

    p.setup = function() {

        p.createCanvas(400, 400);

        angle = p.radians(25);
        p.background(51);
        turtle();

    }

}
var myp5 = new p5(treegen, 'treegen');