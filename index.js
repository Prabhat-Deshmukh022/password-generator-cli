#!/usr/bin/env node

/**
 * password-generator
 * simple password generator
 *
 * @author Prabhat Deshmukh <prabhat.deshmukh22@gmail.com>
 */

import cli from './utils/cli.js';
import init from './utils/init.js';
import log from './utils/log.js';

const { flags, input, showHelp } = cli;
const { clear, debug } = flags;


const password = () => {
	const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
	const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	const numbers = '0123456789'
	const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?'

	let char = lowerCase

	if(flags.uppercase) char += upperCase
	if(flags.specialcharacter) char += specialChars
	if(flags.number) char += numbers

	let password = ''
	for(let i=0;i<flags.length;i++){
		password += char.charAt(Math.floor(Math.random() * char.length))
	}

	console.log(`Generated password ${password}`);
}

(async () => {
	await init({ clear });
	debug && log(flags);
	input.includes(`help`) && showHelp(0);

	if(input.includes("generate")){
		password()
	}
	
})();
