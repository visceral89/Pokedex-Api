import styles from "../styles/components/type.module.scss";

export default function Type({ types }) {
	const getTypeColor = (typeName) => {
		const typeColors = {
			grass: "green",
			poison: "blue",
			fire: "red",
			electric: "yellow",
		};
		return typeColors[typeName] || "gray";
	};

	return (
		<div className={styles.typeContainer}>
			{types.map((typeInfo) => (
				<span
					key={typeInfo.type.name}
					className={styles.type}
					style={{ backgroundColor: getTypeColor(typeInfo.type.name) }}
				>
					{typeInfo.type.name.charAt(0).toUpperCase() +
						typeInfo.type.name.slice(1)}
				</span>
			))}
		</div>
	);
}
