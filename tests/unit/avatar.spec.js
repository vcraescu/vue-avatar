import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Avatar from "@/components/Avatar";
import LetterAvatar from "@/components/LetterAvatar";

describe("Avatar.vue", () => {
  it("letter avatar is displayed when no url is provided", () => {
    const wrapper = shallowMount(Avatar, {
      propsData: {
        name: "John Doe",
      },
    });
    expect(wrapper.contains(LetterAvatar)).to.be.true;
  });

  it("letter avatar is not displayed when url is valid", () => {
    const wrapper = shallowMount(Avatar, {
      propsData: {
        name: "John Doe",
        url: "https://i.pravatar.cc/150?img=3",
      },
    });

    setTimeout(() => {
      expect(wrapper.contains(LetterAvatar)).to.be.false;
    }, 1000);
  });
});
