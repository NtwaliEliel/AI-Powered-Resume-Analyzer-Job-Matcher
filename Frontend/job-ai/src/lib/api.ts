export async function uploadResume(file: File) {
    const formData = new FormData();
    formData.append("resume", file);

    try {
        const response = await fetch("/api/resume/upload", {
            method: "POST",
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error uploading resume:", error);
        throw error;
    }
}