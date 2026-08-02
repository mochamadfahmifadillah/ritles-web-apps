export default function ActivitySubmit({
  handleSubmit,
  disabled,
  onCancel,
}) {
  return (
    <div className="flex gap-3">

      <button
        onClick={onCancel}
        className="
          flex-1
          bg-muted
          text-foreground
          rounded-xl
          py-4
          hover:bg-muted/80
          transition-colors
        "
      >
        Batal
      </button>


      <button
        onClick={handleSubmit}
        disabled={disabled}
        className="
          flex-1
          bg-primary
          text-white
          rounded-xl
          py-4
          hover:bg-primary/90
          transition-colors
          disabled:opacity-50
          disabled:cursor-not-allowed
        "
      >
        Simpan Catatan
      </button>

    </div>
  );
}