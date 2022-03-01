import './styles/index.css';
import $ from 'jquery';
let value = "test";

/**
 * A summary informing the user what the associated element does.
 *
 * A *description*, that can span multiple lines, to go _in-depth_ into
 * the details of this element and to provide some background information
 * or textual references.
 *
 * @param string $myArgument With a *description* of this argument,
 *                           these may also span multiple lines.
 *
 * @return void
 */
value = value + value;

/**
 * @tag test
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
console.log(value);
