import { projects } from './projects';
import { roseText, shell } from './utils';

function padToNChars(string, size) {
	let newString = '';
	for (let index = 0; index < size - string.length; index++) {
		newString = newString + ' ';
	}
	return string + newString;
}

export const showHelp = () => {
	shell.printHTML('Here are the available commands\n' + 'Type them in the terminal to use them.\n');

	shell.print('--------------------------------------------------------------');
	shell.print('| Command       |  Description                               ');
	shell.print('|---------------|--------------------------------------------');
	for (const key in commands) {
		shell.print(`| ${padToNChars(key, 14)}| ${padToNChars(commands[key].description, 43)}|`);
	}
	shell.print('--------------------------------------------------------------');
};

export const showProjects = () => {
	shell.printHTML('Here are the available commands\n' + 'Type them in the terminal to use them.\n');

	shell.print('--------------------------------------------------------------');
	shell.print('| Project       |  Description                               ');
	shell.print('|---------------|--------------------------------------------');
	for (const key in projects) {
		shell.print(
			`|${padToNChars(projects[key].handler, 15)}| ${padToNChars(projects[key].description, 43)}`
		);
		console.log(key);
	}
	shell.print('--------------------------------------------------------------');
};

export const showAbout = () => {
	shell.type(roseText(), 0.1).then(() => {
		shell.printHTML(
			'This is the portfolio of <a class="text-[#0288d1]" href="https://x.com/six_shot" target="_blank">Six Shot</a>'
		);
	});
};

export const printProject = (project) => {
	shell.printHTML(
		`<a class="text-[#0288d1]" href="${project.link}" target="_blank">${project.name}</a> - ${project.description}`
	);
};

export const commands = {
	help: {
		handler: showHelp,
		description: 'Show help'
	},
	about: {
		handler: showAbout,
		description: 'Show about'
	},
	twitter: {
		handler: () => {
			shell.print('Opening Twitter...');
			window.open('https://x.com/six_shot', '_blank');
		},
		description: 'Open Twitter'
	},
	projects: {
		handler: showProjects,
		description: 'Show projects'
	},
	clear: {
		handler: () => {
			shell.clear();
		},
		description: 'Clear console.'
	},
	cd: {
		handler: (shell, argv) => {
			const project = projects.find((project) => project.handler === argv[1]);
			if (project) {
				shell.print(`Name: ${project.name}`);
				shell.print(`Description: ${project.description}`);
				shell.printHTML(
					`Link:<a href="${project.link}" class="text-[#0288d1]" target="_blank">${project.link}</a>`
				);
			} else {
				shell.printHTML(
					`Project ${argv[1]} not found, type <i class="text-[#faf700]">projects</i> to see available projects.`
				);
			}
		},
		description: 'cd [dir] Change working directory.'
	}
};
