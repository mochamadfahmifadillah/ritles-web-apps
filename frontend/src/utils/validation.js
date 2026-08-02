export function validateActivityNote(data) {
  const errors = {};

  // Validasi mood
  if (!data.mood) {
    errors.mood = "Mood belum dipilih";
  }


  // Validasi energy
  if (
    data.energy === undefined ||
    data.energy === null
  ) {
    errors.energy = "Level energi belum diisi";
  }

  if (
    data.energy < 0 ||
    data.energy > 100
  ) {
    errors.energy = "Energi harus antara 0-100";
  }


  // Validasi aktivitas
  if (
    !data.activities ||
    data.activities.length === 0
  ) {
    errors.activities =
      "Pilih minimal satu aktivitas";
  }


  // Validasi durasi
  if (data.durations) {

    Object.entries(data.durations)
      .forEach(([activity, duration]) => {

        if (duration < 0) {

          errors[activity] =
            "Durasi tidak boleh negatif";

        }


        if (duration > 24) {

          errors[activity] =
            "Durasi maksimal 24 jam";

        }

      });

  }


  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };

}