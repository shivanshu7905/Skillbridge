export default function ProgressBar({ value = 0, max = 100, color = "blue" }) {
    const percent = Math.min((value / max) * 100, 100);

    const colors = {
        blue: "bg-blue-500",
        green: "bg-green-500",
        orange: "bg-orange-500",
        red: "bg-red-500",
    };

    return (
        <div className="w-full bg-slate-100 rounded-full h-2.5">
            <div
                className={`h-2.5 rounded-full transition-all duration-500 ${colors[color]}`}
                style={{ width: `${percent}%` }}
            />
        </div>
    );
}