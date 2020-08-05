import type { EditorGroup } from "object-gui";
import type { Container } from "tsparticles/dist/Core/Container";
import type { IOpacity } from "tsparticles/dist/Options/Interfaces/Particles/Opacity/IOpacity";
import type { IOpacityRandom } from "tsparticles/dist/Options/Interfaces/Particles/Opacity/IOpacityRandom";

export class OpacityOptionsEditor {
    public readonly group: EditorGroup;
    private readonly particles: Container;

    constructor(private readonly parent: EditorGroup, private readonly options: IOpacity) {
        this.group = parent.addGroup("opacity", "Opacity");
        this.particles = this.group.data as Container;

        this.addOpacity();
    }

    private addOpacity(): void {
        const particles = this.particles;
        const options = this.options;

        const opacityInput = this.group.addProperty(
            "value",
            "Opacity",
            options.value,
            typeof options.value,
            async (value: string | number | boolean) => {
                if (typeof value === "number") {
                    options.value = value;

                    await particles.refresh();
                }
            }
        );

        (opacityInput.element as HTMLInputElement).step = "0.01";
        (opacityInput.element as HTMLInputElement).min = "0";
        (opacityInput.element as HTMLInputElement).max = "1";

        const animationGroup = this.group.addGroup("animation", "Animation");

        animationGroup.addProperty(
            "enable",
            "Enable",
            options.animation.enable,
            typeof options.animation.enable,
            async (value: number | string | boolean) => {
                if (typeof value === "boolean") {
                    options.animation.enable = value;

                    await particles.refresh();
                }
            }
        );

        const minInput = animationGroup.addProperty(
            "minimumValue",
            "Minimum Value",
            options.animation.minimumValue,
            typeof options.animation.minimumValue,
            async (value: number | string | boolean) => {
                if (typeof value === "number") {
                    options.animation.minimumValue = value;

                    await particles.refresh();
                }
            }
        );

        (minInput.element as HTMLInputElement).step = "0.01";
        (minInput.element as HTMLInputElement).min = "0";
        (minInput.element as HTMLInputElement).max = "1";

        const speedInput = animationGroup.addProperty(
            "speed",
            "Speed",
            options.animation.speed,
            typeof options.animation.speed,
            async (value: number | string | boolean) => {
                if (typeof value === "number") {
                    options.animation.speed = value;

                    await particles.refresh();
                }
            }
        );

        (speedInput.element as HTMLInputElement).step = "0.01";

        animationGroup.addProperty(
            "sync",
            "Sync",
            options.animation.sync,
            typeof options.animation.sync,
            async (value: number | string | boolean) => {
                if (typeof value === "boolean") {
                    options.animation.sync = value;

                    await particles.refresh();
                }
            }
        );

        const randomGroup = this.group.addGroup("random", "Random");
        const random = options.random as IOpacityRandom;

        randomGroup.addProperty(
            "enable",
            "Enable",
            random.enable,
            typeof random.enable,
            async (value: number | string | boolean) => {
                if (typeof value === "boolean") {
                    random.enable = value;

                    await particles.refresh();
                }
            }
        );

        randomGroup.addProperty(
            "minimumValue",
            "Minimum Value",
            random.minimumValue,
            typeof random.minimumValue,
            async (value: number | string | boolean) => {
                if (typeof value === "number") {
                    random.minimumValue = value;

                    await particles.refresh();
                }
            }
        );
    }
}