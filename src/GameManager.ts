import { Display } from "rot-js/lib/index";
import { Glyph } from "./Glyph";
import { Player } from "./Player";
import { Position } from "./Position";

export class GameManager {

    private display: Display;

    constructor() {
        this.sanityCheck();
    }

    drawEntity(position: Position, glyph: Glyph) {
        this.display.draw(position.x, position.y, glyph.char, glyph.fgColor, glyph.bgColor)
    }

    /*
     *  Temporary sanity check
     */
    sanityCheck() {
        let options = {
            width: 75,
            height: 30,
            fontSize: 16,
            spacing: 1.0
        };
        let display = new Display(options);
        document.body.appendChild(display.getContainer());
        for (let x = 0; x < options.width; x++) {
            for (let y = 0; y < options.height; y++) {
                if (!x || !y || x + 1 == options.width || y + 1 == options.height) {
                    display.draw(x, y, "#", "lightgray", "black");
                } else {
                    display.draw(x, y, ".", "lightgray", "black");
                }
            }
        }
        let player: Player = new Player(new Position(options.width >> 1, options.height >> 1));
        display.draw(player.position.x, player.position.y, player.glyph.char, player.glyph.fgColor, player.glyph.bgColor);
    }
}