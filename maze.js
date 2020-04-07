function mazeSolver(vert, horiz, direction) {
    let maze = [
      [' ', ' ', ' ', '*', ' ', ' ', ' '],
      ['*', '*', ' ', '*', ' ', '*', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', '*', '*', '*', '*', '*', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', 'e']
  ];

    if (maze[vert][horiz] === 'e') {
      return direction
    } else if (maze[vert][horiz] === ' ') {
      maze[vert][horiz] = '*'

      // if we can move right
      if ( horiz < maze[vert].length - 1 && maze[vert][horiz + 1] !== '*') {
        horiz++
        return mazeSolver(vert, horiz, direction + 'R');
      }

      // if we can move down
      if ( vert < maze.length - 1 && maze[vert + 1][horiz] !== '*' ) {
        vert++
        return mazeSolver(vert, horiz, direction + 'D');
      }

      // if we can move left
      if ( horiz > 0 && maze[vert][horiz - 1] !== '*') {
        horiz--
        return mazeSolver(vert, horiz, direction + 'L');
      }
      
      // if we can move up
      if ( vert > 0 && maze[vert - 1][horiz] !== '*') {
        vert--
        return mazeSolver(vert, horiz, direction + 'U');
      }
    }
  }
  
  console.log(mazeSolver(0, 0, ''))