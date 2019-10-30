function orbitMars(T_u){
	let L = 6.872190296496372 + 334.08567648447325*T_u + 0.000005422156209529051*T_u**2;
	let t_omega = 5.83320805857028 + 0.03212729365018995*T_u - 2.42406840554768e-8 *T_u**2 - 0.0043 *T_u**3;
	let Omega = 0.851483116269489116 + 0.013456343088771947*T_u - 2.42406840554768e-8*T_u**2 - 9.30842267730309e-8*T_u**3;
	let e = 0.09331290 + 0.000092064*T_u - 0.000000077*T_u**2;
	let i = 0.032294408926068406 - 0.000011780972450961725*T_u + 2.2010541122372933e-7*T_u**2;
	let a = 1.52368839;
	
	return {T_u, L, t_omega, Omega, e, i, a};
}

function orbitTerra(T_u){
	let L = 1.7400352805220856 + 628.3319509972122*T_u + 0.0000052796209872828466*T_u**2;
	let t_omega = 1.7666368132790937 + 0.030005264167973514*T_u + 5.817764173314432e-8*T_u**2;
	let Omega = 0;
	let e = 0.01675104 - 0.00004180*T_u - 0.000000126*T_u**2;
	let i = 0;
	let a = 1.000000013;

	return {T_u, L, t_omega, Omega, e, i, a};
}

function orbitVenus(T_u){
	let L = 5.9824136383293975 + 1021.3529235211721*T_u + 0.000005404702917009107*T_u**2;
	let t_omega = 2.2717874586838125 + 0.024720310230198463*T_u - 0.00001704120089100019*T_u**2;
	let Omega = 1.322600810887680873 + 0.015705345274070973*T_u + 0.000005555964785515282*T_u**2;
	let e = 0.00682069 - 0.00004774*T_u + 0.000000091*T_u**2;
	let i = 0.059230026790728786 + 0.000017555103392976296*T_u + 1.6968478838833758e-8*T_u**2;
	let a = 0.72333015;

	return {T_u, L, t_omega, Omega, e, i, a};
}

/**
 * @param {Int} date - Unix-время в секундах
 */
function T_u(date){
	return date/86400 + 2440587.5;
}