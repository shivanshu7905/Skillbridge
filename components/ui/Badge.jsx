const variants = {
    green: "bg-green-100 text-green-700",
    orange: "bg-orange-100 text-orange-700",
    red: "bg-red-100 text-red-700",
    blue: "bg-blue-100 text-blue-700",
    gray: "bg-slate-100 text-slate-600",
};

export default function Badge({ label, variant = "gray" }) {
    return (
        <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${variants[variant]}`}>
            {label}
        </span>
    );
}