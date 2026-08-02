export default function EnergySlider({
  energy,
  setEnergy,
}) {
  return (
    <div className="space-y-4">

      <input
        type="range"
        min="0"
        max="100"
        value={energy}
        onChange={(e) =>
          setEnergy(Number(e.target.value))
        }
        className="
          w-full
          h-3
          bg-muted
          rounded-full
          appearance-none
          cursor-pointer
          accent-primary
        "
      />


      <div className="flex justify-between text-sm">

        <span className="text-muted-foreground">
          Rendah
        </span>


        <span className="text-primary font-medium">
          {energy}%
        </span>


        <span className="text-muted-foreground">
          Tinggi
        </span>

      </div>


    </div>
  );
}