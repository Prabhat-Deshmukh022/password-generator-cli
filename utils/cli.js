import meowHelp from 'cli-meow-help';
import meow from 'meow';

const flags = {
	clear: {
		type: `boolean`,
		default: false,
		shortFlag: `c`,
		desc: `Clear the console`
	},
	debug: {
		type: `boolean`,
		default: false,
		shortFlag: `d`,
		desc: `Print debug info`
	},
	length: {
		type: `number`,
		default: 12,
		shortFlag: `l`,
		desc: `Specify length of password`
	},
	uppercase: {
		type: `boolean`,
		default: false,
		shortFlag: `u`,
		desc: `Specify uppercase in password`
	},
	number: {
		type: `boolean`,
		default: false,
		shortFlag: `n`,
		desc: `Specify number in password`
	},
	specialcharacter: {
		type: `boolean`,
		default: false,
		shortFlag: `s`,
		desc: `Specify special character in password`
	}
};

const commands = {
	help: { desc: `Print help info` }
};

const helpText = meowHelp({
	name: `calai`,
	flags,
	commands
});

const options = {
	importMeta: import.meta,
	inferType: true,
	description: false,
	hardRejection: false,
	flags
};

export default meow(helpText, options);
