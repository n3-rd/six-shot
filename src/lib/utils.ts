// @ts-expect-error fuck the declaration
import { JsShell } from 'js-shell-emulator';
import { commands } from './commands';

export const isMobile = () => {
	return window.innerWidth <= 768;
};

export const roseText = () => {
	if (!isMobile()) {
		return `
    

    #    /$$$$$$  /$$                           /$$                   /$$    
    #   /$$__  $$|__/                          | $$                  | $$    
    #  | $$  \\__/ /$$ /$$   /$$        /$$$$$$$| $$$$$$$   /$$$$$$  /$$$$$$  
    #  |  $$$$$$ | $$|  $$ /$$/       /$$_____/| $$__  $$ /$$__  $$|_  $$_/  
    #   \\____  $$| $$ \\  $$$$/       |  $$$$$$ | $$  \\ $$| $$  \\ $$  | $$    
    #   /$$  \\ $$| $$  >$$  $$        \\____  $$| $$  | $$| $$  | $$  | $$ /$$
    #  |  $$$$$$/| $$ /$$/\\  $$       /$$$$$$$/| $$  | $$|  $$$$$$/  |  $$$$/
    #   \\______/ |__/|__/  \\__/      |_______/ |__/  |__/ \\______/    \\___/                                                                       
    
    `;
	} else {
		return `
    
#     _____        ______ __     __ 
#    / __(_)_ __  / __/ // /__  / /_
#   _\\ \\/ /\\ \\ / _\\ \\/ _  / _ \\/ __/
#  /___/_//_\\_\\ /___/_//_/\\___/\\__/ 
#                                   

    `;
	}
};

// @ts-expect-error type cannot be inferred
export let shell;

export const initShell = async () => {
	shell = new JsShell('#terminal', {
		textColor: '#28d751',
		fontFamily: 'Ubuntu Mono, Monaco, Courier, monospace',
		promptPS: 'six_shot@portfolio:~$ ',
		forceFocus: true
	});
	shell
		.setWidth('100%')
		.setHeight('100vh')
		.print('Welcome to my personal portfolio.')
		.print('Type "help" to see the available commands.')
		.newLine();

	let input = '';
	while (input !== 'exit') {
		input = await shell.input();
		input = input.trim();
		if (!input.length) {
			continue;
		}
		const argv = input.split(' ');
		if (Object.hasOwn(commands, argv[0])) {
			// @ts-expect-error I don't even have the slightest idea what this is
			await commands[argv[0]].handler(shell, argv);
		} else {
			shell.print(`${argv[0]}: command not found`).newLine();
		}
	}

	shell.print('Bye!');
};
